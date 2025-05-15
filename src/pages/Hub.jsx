import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/templates/Layout';
import { mapsService, operatorsService } from '../services/api';

const Hub = () => {
  const [maps, setMaps] = useState([]);
  const [operators, setOperators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use our service layer to fetch data
        const randomMaps = await mapsService.getRandomMaps(3);
        const randomOperators = await operatorsService.getRandomOperators(3);
        
        setMaps(randomMaps);
        setOperators(randomOperators);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">The Stratbook - Hub</h1>
          <p className="text-lg text-base-content/70">All information about Siege in one place</p>
        </header>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <>
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Featured Maps</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {maps.map((map) => (
                  <div key={map.id} className="card bg-base-200 shadow-lg hover:shadow-xl transition-all">
                    <Link to={`/siege/hub/maps/${map.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                      <figure className="aspect-video">
                        <img
                          src={`/images/maps/${map.name}.jpg`}
                          alt={map.name}
                          className="w-full h-full object-cover rounded-t-lg"
                          onError={(e) => (e.target.src = '/images/maps/default.png')}
                          loading="lazy"
                        />
                      </figure>
                      <div className="card-body p-4 text-center">
                        <h3 className="text-lg font-bold">
                          <Link to={`/siege/hub/maps/${map.name.toLowerCase().replace(/\s+/g, '-')}`}>{map.name}</Link>
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link to="/siege/hub/maps" className="btn btn-primary">Show All Maps</Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Featured Operators</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {operators.map((operator) => (
                  <div key={operator.id} className="card bg-base-200 shadow-lg hover:shadow-xl transition-all">
                    <Link to={`/siege/hub/operators/${operator.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                      <figure className="p-4 pt-6">
                        <img
                          src={`/images/operators/${operator.fileName || operator.name}.png`}
                          alt={operator.fileName || operator.name}
                          className="w-full h-48 object-contain"
                          onError={(e) => (e.target.src = '/images/operators/default.png')}
                          loading="lazy"
                        />
                      </figure>
                      <div className="card-body p-4 text-center">
                        <h3 className="text-lg font-bold">
                          <Link to={`/siege/hub/operators/${operator.name.toLowerCase().replace(/\s+/g, '-')}`}>{operator.name}</Link>
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link to="/siege/hub/operators" className="btn btn-primary">Show All Operators</Link>
              </div>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Hub;