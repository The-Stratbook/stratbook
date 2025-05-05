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

        // Fetch tips based on relatedTips IDs if they exist
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
              <p className="text-gray-700 dark:text-gray-300">{mapData.description}</p>
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
              </section>
            )}
          </div>

          {/* Right Column - Additional Content */}
          <div className="w-full lg:w-1/3">
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">Key Locations</h2>
              <ul className="space-y-2">
                {mapData.keyLocations && mapData.keyLocations.map((location, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">{location}</li>
                ))}
              </ul>
            </section>

            {mapData.videos && mapData.videos.length > 0 && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4 border-b pb-2">Tutorial Videos</h2>
                <ul className="space-y-3">
                  {mapData.videos.map((video, index) => (
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

export default MapDetail;