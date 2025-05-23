import React, { useState, useEffect } from 'react';
import LayoutFullWidth from '../../../components/templates/LayoutFullWidth';
import { normalizeSide, SIDES } from '../../../utils/sideUtils';
import CompactOperatorCard from '../../../features/operators/components/operators/CompactOperatorCard';
import SelectedOperatorCard from '../../../features/operators/components/operators/SelectedOperatorCard';

const KillBoard = () => {
  const [attackers, setAttackers] = useState([]);
  const [defenders, setDefenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAttacker, setSelectedAttacker] = useState(null);
  const [selectedDefender, setSelectedDefender] = useState(null);

  useEffect(() => {
    const fetchOperators = async () => {
      try {
        setLoading(true);
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
                
        const attackersList = operatorData
          .filter(op => {
            if (!op.side) return false;
            const side = normalizeSide(op.side);
            return side === SIDES.ATTACK;
          })
          .map(op => ({ ...op, alive: true }));
        
        const defendersList = operatorData
          .filter(op => {
            if (!op.side) return false;
            const side = normalizeSide(op.side);
            return side === SIDES.DEFEND;
          })
          .map(op => ({ ...op, alive: true }));
                
        setAttackers(attackersList);
        setDefenders(defendersList);
      } catch (error) {
        console.error('Error fetching operators:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOperators();
  }, []);

  const handleKill = (side, operatorName) => {
    if (side === 'Attacker') {
      setAttackers((prev) =>
        prev.map((op) => (op.name === operatorName ? { ...op, alive: false } : op))
      );
      // Clear selection if the killed operator was selected
      if (selectedAttacker === operatorName) {
        setSelectedAttacker(null);
      }
    } else {
      setDefenders((prev) =>
        prev.map((op) => (op.name === operatorName ? { ...op, alive: false } : op))
      );
      // Clear selection if the killed operator was selected
      if (selectedDefender === operatorName) {
        setSelectedDefender(null);
      }
    }
  };

  const resetBoard = () => {
    setAttackers((prev) => prev.map((op) => ({ ...op, alive: true })));
    setDefenders((prev) => prev.map((op) => ({ ...op, alive: true })));
    setSelectedAttacker(null);
    setSelectedDefender(null);
  };

  const getRandomOperator = (side) => {
    const aliveOperators = side === 'Attacker' ? attackers.filter((op) => op.alive) : defenders.filter((op) => op.alive);
    if (aliveOperators.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * aliveOperators.length);
    const selected = aliveOperators[randomIndex];
    
    // Update selected operator
    if (side === 'Attacker') {
      setSelectedAttacker(selected.name);
      setSelectedDefender(null);
    } else {
      setSelectedDefender(selected.name);
      setSelectedAttacker(null);
    }
    
    return selected;
  };

  return (
    <LayoutFullWidth
      seoProps={{
        title: 'KillBoard | The Stratbook',
        description: 'Track your operator usage and force yourself to play with different operators in Rainbow Six Siege. A fun game to expand your operator pool and improve versatility.',
        keywords: 'Rainbow Six Siege, KillBoard challenge, R6S operators, operator tracking, gameplay variety, Siege operators game, Rainbow Six operators',
        url: window.location.href,
        image: '/images/general/logo.png',
        canonicalUrl: `${window.location.origin}/fun/killboard`,
      }}
    >
      <div className="container mx-auto p-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">KillBoard</h1>
          <p className="text-lg text-gray-500">
            Force yourself to play with different operators. Use the randomizer to pick your next operator or pick them youself. Click an operator to mark them as
            "killed" so that they won't show up again, click 'reset board' to start over.
          </p>
        </div>

        <div className="flex justify-between mb-4">
          <button 
            className="btn btn-primary" 
            onClick={() => {
              getRandomOperator('Attacker');
            }}
          >
            Random Attacker
          </button>
          <button 
            className="btn btn-primary" 
            onClick={() => {
              getRandomOperator('Defender');
            }}
          >
            Random Defender
          </button>
          <button className="btn btn-secondary" onClick={resetBoard}>
            Reset Board
          </button>
        </div>

        {(selectedAttacker || selectedDefender) && (
          <div className="bg-base-300 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-bold mb-2">Currently Selected:</h2>
            <div className="flex flex-wrap gap-4">
              {selectedAttacker && (
                <SelectedOperatorCard 
                  name={selectedAttacker} 
                  side="Attacker"
                />
              )}
              
              {selectedDefender && (
                <SelectedOperatorCard 
                  name={selectedDefender} 
                  side="Defender"
                />
              )}
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-center p-8">
            <span className="loading loading-spinner loading-lg"></span>
            <p>Loading operators...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Attackers ({attackers.filter(op => op.alive).length}/{attackers.length})</h2>
              {attackers.length === 0 ? (
                <div className="p-4 bg-base-200 rounded-lg">No attackers found</div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {attackers.map((op) => (
                    <CompactOperatorCard
                      key={op.name}
                      name={op.name}
                      fileName={op.fileName}
                      alive={op.alive}
                      isSelected={selectedAttacker === op.name}
                      side="Attacker"
                      onClick={() => handleKill('Attacker', op.name)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Defenders ({defenders.filter(op => op.alive).length}/{defenders.length})</h2>
              {defenders.length === 0 ? (
                <div className="p-4 bg-base-200 rounded-lg">No defenders found</div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {defenders.map((op) => (
                    <CompactOperatorCard
                      key={op.name}
                      name={op.name}
                      fileName={op.fileName}
                      alive={op.alive}
                      isSelected={selectedDefender === op.name}
                      side="Defender"
                      onClick={() => handleKill('Defender', op.name)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </LayoutFullWidth>
  );
};

export default KillBoard;