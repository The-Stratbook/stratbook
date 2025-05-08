import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../components/templates/Layout';
import SearchFilter from '../../../components/filters/SearchFilter';
import SideFilter from '../../../components/filters/SideFilter';
import ImageWithFallback from '../../../components/atoms/ImageWithFallback';

const HubMaps = () => {
  const [maps, setMaps] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSide, setSelectedSide] = useState('');

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await fetch('/data/siege/mapsIndex.json');
        if (!response.ok) throw new Error('Failed to fetch maps index');
        const mapFiles = await response.json();

        const mapData = await Promise.all(
          mapFiles.map(async (file) => {
            const mapResponse = await fetch(`/data/siege/maps/${file}`);
            if (!mapResponse.ok) throw new Error(`Failed to fetch map: ${file}`);
            return mapResponse.json();
          })
        );

        setMaps(mapData);
      } catch (error) {
        console.error('Error fetching maps:', error);
      }
    };

    fetchMaps();
  }, []);

  const uniquePlaylists = [
    'All',
    ...Array.from(new Set(maps.flatMap((map) => map.playlist || []))).sort(),
  ];

  const filteredMaps = maps
    .filter((map) =>
      selectedPlaylist === 'All' || (map.playlist && map.playlist.includes(selectedPlaylist))
    )
    .filter((map) =>
      !searchTerm || map.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleSideChange = (side) => {
    setSelectedSide(side);
  };

  return (
    <Layout seoProps={{
      title: 'Rainbow Six Siege Maps | Explore All Maps',
      description: 'Discover detailed information about all Rainbow Six Siege maps, including strategies and callouts.',
      keywords: 'Rainbow Six Siege maps, Siege map strategies, Siege map callouts, R6S maps, Siege bomb sites, map knowledge',
      url: window.location.href,
      image: '/images/general/logo.png',
      canonicalUrl: `${window.location.origin}/siege/hub/maps`
    }}>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Maps</h1>
        
        <div className="mb-4">
          <SideFilter 
            selectedSide={selectedSide} 
            onSideChange={handleSideChange}
            showUniversal={false} 
          />
        </div>

        <div className="tabs tabs-boxed w-full mb-4 rounded-lg overflow-hidden">
          {uniquePlaylists.map((playlist) => (
            <button
              key={playlist}
              className={`tab transition-all duration-300 ${
                selectedPlaylist === playlist
                  ? 'tab-active bg-primary text-white transform scale-105'
                  : 'bg-base-200'
              }`}
              onClick={() => setSelectedPlaylist(playlist)}
            >
              {playlist}
            </button>
          ))}
        </div>

        <div className="mb-4">
          <SearchFilter searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMaps.map((map) => (
            <div key={map.id} className="card bg-base-200 shadow-lg">
              <Link to={`/siege/hub/maps/${map.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                <figure className="h-40">
                  <ImageWithFallback
                    src={`/images/maps/${map.name}.jpg`}
                    fallbackSrc="/images/maps/Default.jpg"
                    alt={map.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </figure>
                <div className="card-body p-4 text-center">
                  <h3 className="text-lg font-bold">{map.name}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HubMaps;