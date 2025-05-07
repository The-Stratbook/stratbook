import React, { useEffect, useState } from 'react';
import Layout from '../../../components/templates/Layout';
import { useParams } from 'react-router-dom';
import OperatorBanner from '../components/operators/OperatorBanner';
import OperatorLoadout from '../components/operators/OperatorLoadout';
import OperatorBiography from '../components/operators/OperatorBiography';
import OperatorTips from '../components/operators/OperatorTips';
import RelatedTips from '../components/operators/RelatedTips';

const OperatorDetail = () => {
  const { operatorName } = useParams();
  const [operatorData, setOperatorData] = useState(null);
  const [externalToolsData, setExternalToolsData] = useState(null);
  const [relatedTips, setRelatedTips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch operator data
        const operatorResponse = await fetch(`/data/siege/operators/${operatorName}.json`);
        if (!operatorResponse.ok) throw new Error('Failed to fetch operator data');
        const data = await operatorResponse.json();
        setOperatorData(data);
        
        // Fetch external tools data
        const toolsResponse = await fetch('/data/externalTools.json');
        if (!toolsResponse.ok) throw new Error('Failed to fetch external tools');
        const toolsData = await toolsResponse.json();
        setExternalToolsData(toolsData);

        // Fetch tips based on relatedTips IDs if they exist
        if (data.relatedTips && Array.isArray(data.relatedTips) && data.relatedTips.length > 0) {
          // Fetch all tips specified by IDs directly
          const tipPromises = data.relatedTips.map(tipId => 
            fetch(`/data/siege/tips/${tipId}.json`)
              .then(res => {
                if (!res.ok) throw new Error(`Failed to fetch tip ${tipId}`);
                return res.json();
              })
              .catch(err => {
                console.error(`Error fetching tip ${tipId}:`, err);
                return null;
              })
          );
          
          const fetchedTips = await Promise.all(tipPromises);
          // Filter out any null results from failed fetches
          const validTips = fetchedTips.filter(tip => tip !== null);
          setRelatedTips(validTips);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [operatorName]);

  if (!operatorData || !externalToolsData) return <p>Loading...</p>;

  // Create relevant external links for this operator
  const relevantLinks = [
    {
      name: "Official R6 Page",
      url: `https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/operators/${operatorName.toLowerCase()}`,
      type: "Official"
    },
    {
      name: "R6 Wiki",
      url: `https://rainbowsix.fandom.com/wiki/${operatorData.name}`,
      type: "Wiki"
    },
    {
      name: "R6 Marketplace",
      url: `https://www.ubisoft.com/en-gb/game/rainbow-six/siege/marketplace?route=buy`,
      type: "Marketplace"
    }
  ];

  return (
    <Layout seoProps={{
      title: `${operatorData.name} | Operator Details | The Stratbook`,
      description: `Learn about ${operatorData.name}, their unique abilities, loadout options, gameplay tips, and strategies for Rainbow Six Siege. Master ${operatorData.name}'s kit and improve your gameplay.`,
      keywords: `${operatorData.name}, Rainbow Six Siege, Operator Guide, ${operatorData.name} loadout, ${operatorData.name} tips, ${operatorData.name} R6S, ${operatorData.side} operator, ${operatorData.roles?.join(', ')}`,
      url: window.location.href,
      image: `/images/operators/${operatorData.name}.png`,
      canonicalUrl: `${window.location.origin}/siege/hub/operators/${operatorName}`
    }}>
      {/* Hero Banner with Operator Image and Logo */}
      <div className="bg-gray-800 py-8 mb-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <OperatorBanner operator={operatorData} />
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Operator Information */}
          <div className="w-full lg:w-2/3">
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">Unique Ability</h2>
              <p className="text-lg font-medium mb-2">{operatorData.uniqueAbility}</p>
              <p className="text-gray-700 dark:text-gray-300">{operatorData.biography && operatorData.biography.description}</p>
            </section>

            {relatedTips.length > 0 && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <RelatedTips tips={relatedTips} operatorName={operatorData.name} />
              </section>
            )}

            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <OperatorLoadout loadout={operatorData.loadout} />
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <OperatorBiography biography={operatorData.biography} />
            </section>

            {operatorData.gameplayTips && operatorData.gameplayTips.length > 0 && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <OperatorTips tips={operatorData.gameplayTips} />
              </section>
            )}
          </div>

          {/* Right Column - References and Additional Content */}
          <div className="w-full lg:w-1/3">
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">References</h2>
              
              <h3 className="text-xl font-semibold mb-2">External Resources</h3>
              <ul className="space-y-2 mb-4">
                {relevantLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    >
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded mr-2">{link.type}</span>
                      <span className="text-blue-600 dark:text-blue-400">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold mb-2">Strategy Tools</h3>
              <ul className="space-y-2">
                {externalToolsData.competitive
                  .filter(tool => ['r6strat', 'stratbookgg'].includes(tool.id))
                  .map((tool, index) => (
                    <li key={index}>
                      <a 
                        href={tool.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                      >
                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded mr-2">Strategy</span>
                        <span className="text-blue-600 dark:text-blue-400">{tool.name}</span>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </section>

            {/* Myths Section */}
            {operatorData.myths && operatorData.myths.length > 0 && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4 border-b pb-2">Myths & Facts</h2>
                <ul className="space-y-3">
                  {operatorData.myths.map((item, index) => (
                    <li key={index} className="pb-2 border-b border-gray-200 dark:border-gray-700 last:border-0">
                      <p className="font-medium mb-1">{item.myth}</p>
                      <p className={`text-sm ${
                        item.status === 'Confirmed' ? 'text-green-600 dark:text-green-400' : 
                        item.status === 'Busted' ? 'text-red-600 dark:text-red-400' : 
                        'text-yellow-600 dark:text-yellow-400'
                      }`}>
                        {item.status}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Videos Section */}
            {operatorData.videos && operatorData.videos.length > 0 && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4 border-b pb-2">Tutorial Videos</h2>
                <ul className="space-y-3">
                  {operatorData.videos.map((video, index) => (
                    <li key={index}>
                      <a 
                        href={video.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                      >
                        <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                        <span className="text-blue-600 dark:text-blue-400">{video.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OperatorDetail;