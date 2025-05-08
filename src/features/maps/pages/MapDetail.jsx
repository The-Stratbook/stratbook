import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../../components/templates/Layout';
import Section from '../../../components/organisms/Section';
import List from '../../../components/List';
import ImageWithFallback from '../../../components/atoms/ImageWithFallback';
import { mapsService, tipsService } from '../../../services/api';

const MapDetail = () => {
  const { mapName } = useParams();
  const [mapData, setMapData] = useState(null);
  const [relatedTips, setRelatedTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Use mapsService instead of direct fetch
        const allMaps = await mapsService.getAllMaps();
        
        // Find the map using case-insensitive matching and URL-friendly formatting
        const formattedMapName = mapName.replace(/-/g, ' ');
        const map = allMaps.find(m => 
          m.name.toLowerCase().replace(/\s+/g, '-') === mapName.toLowerCase() ||
          m.name.toLowerCase() === formattedMapName.toLowerCase()
        );
        
        if (!map) {
          throw new Error('Map not found');
        }
        
        setMapData(map);
        
        // Fetch related tips if they exist
        if (map.relatedTips && Array.isArray(map.relatedTips) && map.relatedTips.length > 0) {
          const tips = await Promise.all(
            map.relatedTips.map(tipId => tipsService.getTipById(tipId))
          );
          setRelatedTips(tips.filter(Boolean)); // Filter out any null/undefined tips
        }
      } catch (error) {
        console.error('Error fetching map data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [mapName]);

  if (loading) return <div>Loading...</div>;

  if (!mapData) return <div>Map not found</div>;

  return (
    <Layout>
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

            <ImageWithFallback
              src={`/images/maps/${mapData.name}.jpg`}
              alt={mapData.name}
              fallbackSrc="/images/general/logo.png"
              className="w-full max-w-3xl h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Map Information */}
          <div className="w-full lg:w-2/3">
            <Section title="Overview">
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
            </Section>

            <Section title="Community Tips & Strategies">
              <List
                items={relatedTips.slice(0, 3)}
                renderItem={(tip) => (
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
                )}
              />
              {relatedTips.length > 3 && (
                <div className="mt-4 text-center">
                  <Link to={`/siege/tips?map=${mapData.name}`} className="text-primary hover:text-primary-focus">
                    View all {relatedTips.length} tips for {mapData.name}
                  </Link>
                </div>
              )}
            </Section>
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