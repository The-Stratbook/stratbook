import React, { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import { useParams, Link } from 'react-router-dom';

const MapDetail = () => {
  const { mapName } = useParams();
  const [mapData, setMapData] = useState(null);
  const [relatedTips, setRelatedTips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Convert mapName to uppercase before fetching data
        const upperCaseMapName = mapName.toUpperCase();

        // Fetch map data
        const mapResponse = await fetch(`/data/siege/maps/${upperCaseMapName}.json`);
        if (!mapResponse.ok) throw new Error('Failed to fetch map data');
        const data = await mapResponse.json();
        setMapData(data);

        // Fetch related tips if they exist
        if (data.relatedTips && Array.isArray(data.relatedTips) && data.relatedTips.length > 0) {
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
          const validTips = fetchedTips.filter(tip => tip !== null);
          setRelatedTips(validTips);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [mapName]);

  if (!mapData) return <p>Loading...</p>;

  return (
    <Layout seoProps={{
      title: `${mapData.name} | Map Details | The Stratbook`,
      description: `Explore details, strategies, and tips for the map ${mapData.name}.`,
      keywords: `${mapData.name}, Rainbow Six Siege, Map Guide`,
      url: window.location.href
    }}>
      {/* Hero Banner with Map Image */}
      <div className="bg-gray-800 py-8 mb-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{mapData.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <span>Playlists:</span>
              {mapData.playlist && mapData.playlist.map((mode, index) => (
                <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-white">{mode}</span>
              ))}
            </div>
            <img 
              src={`/images/maps/${mapData.name}.jpg`} 
              alt={mapData.name} 
              className="w-full max-w-3xl h-auto rounded-lg shadow-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/general/logo.png";
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Map Information */}
          <div className="w-full lg:w-2/3">
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{mapData.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Location</p>
                  <p className="font-medium">{mapData.location}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Release Date</p>
                  <p className="font-medium">{mapData.releaseDate}</p>
                </div>
                {mapData.reworkDate && (
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Rework Date</p>
                    <p className="font-medium">{mapData.reworkDate}</p>
                  </div>
                )}
              </div>
            </section>

            {relatedTips.length > 0 && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4 border-b pb-2">Community Tips & Strategies</h2>
                <ul className="space-y-4">
                  {relatedTips.slice(0, 3).map((tip, index) => (
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
                    <Link to={`/siege/tips?map=${mapData.name}`} className="text-primary hover:text-primary-focus">
                      View all {relatedTips.length} tips for {mapData.name}
                    </Link>
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Right Column - Additional Content */}
          <div className="w-full lg:w-1/3">
            {/* External Tools Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">External Tools</h2>
              <ul className="space-y-4">
                {mapData.externalTools && mapData.externalTools.map((tool, index) => (
                  <li key={index} className="pb-3 last:pb-0">
                    <a 
                      href={tool.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-md transition duration-200"
                    >
                      <h3 className="font-semibold text-blue-600 dark:text-blue-400">{tool.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{tool.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Official Links Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">Official Links</h2>
              <ul className="space-y-2">
                <li>
                  <a 
                    href={`https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/maps/${mapData.name.replace(/\s+/g, '-').toLowerCase()}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded mr-2">Official</span>
                    <span className="text-blue-600 dark:text-blue-400">Ubisoft R6 Page</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://rainbowsix.fandom.com/wiki/${mapData.name.replace(/\s+/g, '_')}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded mr-2">Wiki</span>
                    <span className="text-blue-600 dark:text-blue-400">R6 Wiki</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MapDetail;