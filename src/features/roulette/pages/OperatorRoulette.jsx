import React, { useState, useEffect } from 'react';
import Layout from '../../../components/templates/Layout';
import { normalizeSide, SIDES } from '../../../utils/sideUtils';
import FeaturePreview from '../../../components/FeaturePreview';
import OperatorRouletteHeader from '../components/roulette/OperatorRouletteHeader';
import RouletteContainer from '../components/roulette/RouletteContainer';

const OperatorRoulette = () => {
  const [operators, setOperators] = useState([]);
  const [attackers, setAttackers] = useState([]);
  const [defenders, setDefenders] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [loading, setLoading] = useState(false);
  const [side, setSide] = useState('random');
  
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
        const attackersData = validOperators.filter(op => normalizeSide(op.side) === SIDES.ATTACK);
        const defendersData = validOperators.filter(op => normalizeSide(op.side) === SIDES.DEFEND);
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
      if (selectedSide === SIDES.ATTACK) {
        pool = attackers;
      } else if (selectedSide === SIDES.DEFEND) {
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

  // Upcoming features data for the FeaturePreview component
  const upcomingFeatures = [
    {
      title: "Random Weapons",
      description: "Get random primary and secondary weapons with attachments"
    },
    {
      title: "Random Gadgets",
      description: "Add variety with random gadget selections"
    },
    {
      title: "Operator Filters",
      description: "Filter operators by role, speed, and special abilities"
    }
  ];

  return (
    <Layout seoProps={{
      title: 'Operator Roulette | The Stratbook',
      description: 'Randomly select operators for Rainbow Six Siege to add variety to your gameplay. Try new operators, weapons, and strategies with our operator randomizer.',
      keywords: 'Rainbow Six Siege, R6S, operator roulette, random operator, Siege operators, R6 randomizer, random attacker, random defender',
      url: window.location.href,
      image: '/images/general/logo.png',
      canonicalUrl: `${window.location.origin}/siege/operator-roulette`
    }}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Operator Roulette</h1>
        
        <RouletteContainer
          onSelectOperator={randomizeOperator}
          loading={loading}
          selectedOperator={selectedOperator}
          attackersAvailable={attackers.length > 0}
          defendersAvailable={defenders.length > 0}
          className="mb-8"
        >
          <OperatorRouletteHeader />
        </RouletteContainer>
        
        {/* Future Features Section */}
        <FeaturePreview features={upcomingFeatures} />
      </div>
    </Layout>
  );
};

export default OperatorRoulette;