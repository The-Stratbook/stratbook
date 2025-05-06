import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';

const OperatorRoulette = () => {
  const [operators, setOperators] = useState([]);
  const [attackers, setAttackers] = useState([]);
  const [defenders, setDefenders] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [loading, setLoading] = useState(false);
  const [side, setSide] = useState('random'); // 'attack', 'defend', or 'random'
  
  useEffect(() => {
    // Fetch all operators
    const fetchOperators = async () => {
      try {
        const response = await fetch('/data/siege/operatorsIndex.json');
        if (!response.ok) throw new Error('Failed to fetch operators index');
        const operatorFiles = await response.json();
        
        const operatorsData = await Promise.all(
          operatorFiles.map(async (file) => {
            try {
              const res = await fetch(`/data/siege/operators/${file}`);
              if (!res.ok) return null;
              return res.json();
            } catch (error) {
              console.error('Error fetching operator data:', error);
              return null;
            }
          })
        );

        const validOperators = operatorsData.filter(op => op !== null);
        setOperators(validOperators);
        
        // Separate attackers and defenders
        const attackersData = validOperators.filter(op => op.side === 'Attack');
        const defendersData = validOperators.filter(op => op.side === 'Defend');
        setAttackers(attackersData);
        setDefenders(defendersData);
      } catch (error) {
        console.error('Error in operator fetch:', error);
      }
    };

    fetchOperators();
  }, []);

  const randomizeOperator = (selectedSide = side) => {
    setLoading(true);
    
    // Add a slight delay for UI effect
    setTimeout(() => {
      let pool = operators;
      
      // Filter by side if not random
      if (selectedSide === 'attack') {
        pool = attackers;
      } else if (selectedSide === 'defend') {
        pool = defenders;
      }
      
      // Select random operator from pool
      if (pool.length > 0) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        setSelectedOperator(pool[randomIndex]);
        setSide(selectedSide);
      }
      
      setLoading(false);
    }, 500);
  };

  return (
    <Layout seoProps={{
      title: 'Operator Roulette | The Stratbook',
      description: 'Randomly select operators for Rainbow Six Siege to add variety to your gameplay.',
      keywords: 'Rainbow Six Siege, R6S, operator roulette, random operator',
      url: window.location.href
    }}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Operator Roulette</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
            We created this Operator Roulette because Rainbow Six: Siege removed the random operator selection button from the "standard" playlist. 
            Now you can still enjoy the excitement of playing with random operators and discover new ways to play the game!
          </p>
          
          <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
            Can't decide which operator to play? Let us pick one for you! Select your preferences and click the button to get a random operator.
          </p>
          
          {/* Selection Controls */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button 
              className="btn btn-lg btn-info"
              onClick={() => randomizeOperator('attack')}
              disabled={loading || attackers.length === 0}
            >
              {loading && side === 'attack' ? 
                <span className="loading loading-spinner"></span> : 
                'Random Attacker'
              }
            </button>
                        
            <button 
              className="btn btn-lg btn-warning"
              onClick={() => randomizeOperator('defend')}
              disabled={loading || defenders.length === 0}
            >
              {loading && side === 'defend' ? 
                <span className="loading loading-spinner"></span> : 
                'Random Defender'
              }
            </button>
          </div>
          
          {/* Result Display */}
          {selectedOperator && (
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 flex flex-col items-center max-w-md mx-auto relative">
                <span className={`absolute top-4 right-4 badge ${selectedOperator.side === 'Attack' ? 'badge-info' : 'badge-warning'} badge-lg`}>
                  {selectedOperator.side}
                </span>
                
                <div className="relative w-48 h-48 mb-4">
                  <img 
                    src={`/images/operators/${selectedOperator.fileName || selectedOperator.name}.png`} 
                    alt={selectedOperator.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/general/logo.png";
                    }}
                  />
                  <img 
                    src={`/images/operators/${selectedOperator.fileName || selectedOperator.name}_logo.png`} 
                    alt={`${selectedOperator.name} logo`}
                    className="absolute bottom-0 right-0 w-12 h-12"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                
                <h2 className="text-2xl font-bold mb-2">{selectedOperator.fileName || selectedOperator.name}</h2>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {selectedOperator.roles.map((role, index) => (
                    <span key={index} className="badge badge-outline">{role}</span>
                  ))}
                </div>
                
                <p className="text-center text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {selectedOperator.biography.description}
                </p>
                
                <Link 
                  to={`/siege/hub/operator/${selectedOperator.fileName || selectedOperator.name}`}
                  className="btn btn-sm btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          )}
        </div>
        
        {/* Future Features Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-md p-4 text-center">
              <h3 className="font-medium mb-2">Random Weapons</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Get random primary and secondary weapons with attachments
              </p>
            </div>
            <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-md p-4 text-center">
              <h3 className="font-medium mb-2">Random Gadgets</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Add variety with random gadget selections
              </p>
            </div>
            <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-md p-4 text-center">
              <h3 className="font-medium mb-2">Challenges</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Get unique gameplay challenges to test your skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OperatorRoulette;