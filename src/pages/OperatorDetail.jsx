import React, { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import { useParams, Link } from 'react-router-dom';

// Helper function to format date
const formatOperatorDate = (dateString) => {
  // Check if it's already in the old format like "November 3rd (Age 38)"
  if (dateString.includes('(Age')) {
    return dateString;
  }
  
  // If it's in YYYY-MM-DD format
  try {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;
    
    const month = date.toLocaleString('en-US', { month: 'long' });
    
    const day = date.getDate();
    let daySuffix = 'th';
    if (day === 1 || day === 21 || day === 31) daySuffix = 'st';
    else if (day === 2 || day === 22) daySuffix = 'nd';
    else if (day === 3 || day === 23) daySuffix = 'rd';
    
    // Calculate age based on current date
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
      age--;
    }
    
    return `${month} ${day}${daySuffix} (Age ${age})`;
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

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
      description: `Learn about ${operatorData.name}, their roles, tips, tricks, and more.`,
      keywords: `${operatorData.name}, Rainbow Six Siege, Operator Guide`,
      url: window.location.href
    }}>
      {/* Hero Banner with Operator Image and Logo */}
      <div className="bg-gray-800 py-8 mb-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            {/* Operator Info */}
            <div className="flex-1 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{operatorData.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">{operatorData.side}</span>
                {operatorData.roles.map((role, index) => (
                  <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{role}</span>
                ))}
              </div>
              <p className="text-gray-300">{operatorData.biography.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-6">
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Health:</span>
                  <div className="flex">
                    {[...Array(3)].map((_, i) => (
                      <span key={i} className={`w-4 h-4 rounded-full mx-0.5 ${i < operatorData.health ? "bg-green-500" : "bg-gray-600"}`}></span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Speed:</span>
                  <div className="flex">
                    {[...Array(3)].map((_, i) => (
                      <span key={i} className={`w-4 h-4 rounded-full mx-0.5 ${i < operatorData.speed ? "bg-blue-500" : "bg-gray-600"}`}></span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Difficulty:</span>
                  <div className="flex">
                    {[...Array(3)].map((_, i) => (
                      <span key={i} className={`w-4 h-4 rounded-full mx-0.5 ${i < operatorData.difficulty ? "bg-yellow-500" : "bg-gray-600"}`}></span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="bg-purple-700 px-3 py-1 rounded-full text-sm">
                  Squad: {operatorData.squad}
                </span>
              </div>
            </div>
            
            {/* Operator Images */}
            <div className="mt-6 md:mt-0 flex items-center justify-center relative">
              <img 
                src={`/images/operators/${operatorData.name}.png`} 
                alt={operatorData.name} 
                className="w-64 h-auto z-10"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/general/logo.png";
                }}
              />
              <img 
                src={`/images/operators/${operatorData.name}_logo.png`} 
                alt={`${operatorData.name} logo`} 
                className="absolute bottom-0 right-0 w-16 h-16 z-20"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
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
              <p className="text-gray-700 dark:text-gray-300">{operatorData.biography.description}</p>
            </section>

            {relatedTips.length > 0 && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4 border-b pb-2">Community Tips & Strategies</h2>
                <ul className="space-y-4">
                  {relatedTips.map((tip, index) => (
                    <li key={index} className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
                      <Link to={`/siege/tip/${tip.id}`} className="block">
                        <h3 className="font-semibold text-lg text-primary hover:text-primary-focus mb-1">{tip.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{tip.description.substring(0, 120)}...</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                            {tip.skill} Skill
                          </span>
                          {tip.map && (
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">
                              {tip.map}
                            </span>
                          )}
                          {tip.tags && tip.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                {relatedTips.length > 3 && (
                  <div className="mt-4 text-center">
                    <Link to={`/siege/tips?operator=${operatorData.name}`} className="text-primary hover:text-primary-focus">
                      View all {relatedTips.length} tips for {operatorData.name}
                    </Link>
                  </div>
                )}
              </section>
            )}

            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">Loadout</h2>
              
              <h3 className="text-xl font-semibold mb-2">Primary Weapons</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {operatorData.loadout.primary.map((weapon, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                    <p className="font-medium">{weapon.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{weapon.type}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Secondary Weapons</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {operatorData.loadout.secondary.map((weapon, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                    <p className="font-medium">{weapon.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{weapon.type}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Gadgets</h3>
              <div className="flex flex-wrap gap-2">
                {operatorData.loadout.gadgets.map((gadget, index) => (
                  <span key={index} className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-md text-sm">{gadget}</span>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">Biography</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Real Name</p>
                  <p className="font-medium">{operatorData.biography.realName}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Date of Birth</p>
                  <p className="font-medium">{formatOperatorDate(operatorData.biography.dateOfBirth)}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Place of Birth</p>
                  <p className="font-medium">{operatorData.biography.placeOfBirth}</p>
                </div>
              </div>
            </section>

            {operatorData.gameplayTips && operatorData.gameplayTips.length > 0 && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4 border-b pb-2">Gameplay Tips</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {operatorData.gameplayTips.map((tip, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{tip}</li>
                  ))}
                </ul>
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