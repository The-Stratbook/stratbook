import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/templates/Layout';

const Hub = () => {
  const [maps, setMaps] = useState([]);
  const [operators, setOperators] = useState([]);

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

        setMaps(mapData.sort(() => 0.5 - Math.random()).slice(0, 3)); // Randomize and pick 3
      } catch (error) {
        console.error('Error fetching maps:', error);
      }
    };

    const fetchOperators = async () => {
      try {
        const response = await fetch('/data/siege/operatorsIndex.json');
        if (!response.ok) throw new Error('Failed to fetch operators index');
        const operatorFiles = await response.json();

        const operatorData = await Promise.all(
          operatorFiles.map(async (file) => {
            const operatorResponse = await fetch(`/data/siege/operators/${file}`);
            if (!operatorResponse.ok) throw new Error(`Failed to fetch operator: ${file}`);
            return operatorResponse.json();
          })
        );

        setOperators(operatorData.sort(() => 0.5 - Math.random()).slice(0, 3)); // Randomize and pick 3
      } catch (error) {
        console.error('Error fetching operators:', error);
      }
    };

    fetchMaps();
    fetchOperators();
  }, []);

  return (
    <Layout seoProps={{
      title: 'The Stratbook Hub | All Siege Information in One Place',
      description: 'Explore maps, operators, and more in The Stratbook Hub. Your ultimate resource for Rainbow Six Siege.',
      keywords: 'Rainbow Six Siege, Siege Hub, Siege Maps, Siege Operators, Tactical FPS, R6S information, Siege guide',
      url: window.location.href,
      image: '/images/general/logo.png',
      canonicalUrl: `${window.location.origin}/siege/hub`
    }}>
      <div className="container mx-auto p-4">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">The Stratbook - Hub</h1>
          <p className="text-lg text-gray-600">All information about Siege in one place</p>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Featured Maps</h2>
          <div className="grid grid-cols-3 gap-4">
            {maps.map((map) => (
              <div key={map.id} className="card bg-base-200 shadow-lg">
                <Link to={`/maps/${map.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                  <figure>
                    <img
                      src={`/images/maps/${map.name}.jpg`}
                      alt={map.name}
                      className="w-full h-32 object-cover rounded-t-lg"
                      onError={(e) => (e.target.src = '/images/maps/default.png')}
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h3 className="text-lg font-bold">{map.name}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/siege/hub/maps" className="btn btn-primary">Show All Maps</Link>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Featured Operators</h2>
          <div className="grid grid-cols-3 gap-4">
            {operators.map((operator) => (
              <div key={operator.id} className="card bg-base-200 shadow-lg">
                <Link to={`/siege/hub/operators/${operator.fileName || operator.name}`} className="block">
                  <figure>
                    <img
                      src={`/images/operators/${operator.fileName || operator.name}.png`}
                      alt={operator.fileName || operator.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                      onError={(e) => (e.target.src = '/images/operators/default.png')}
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h3 className="text-lg font-bold">{operator.name}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/siege/hub/operators" className="btn btn-primary">Show All Operators</Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Hub;