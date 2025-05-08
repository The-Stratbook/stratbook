import React, { useEffect, useState } from "react";
import Layout from '../../../components/templates/Layout';
import SearchFilter from '../../../components/filters/SearchFilter';
import SideFilter from '../../../components/filters/SideFilter';
import { SIDES, normalizeSide } from '../../../utils/sideUtils';
import GridOperatorCard from "../../../features/operators/components/operators/GridOperatorCard";

const HubOperators = () => {
  const [operators, setOperators] = useState([]);
  const [selectedSide, setSelectedSide] = useState(SIDES.BOTH); 
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
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

        setOperators(operatorData);
      } catch (error) {
        console.error('Error fetching operators:', error);
      }
    };

    fetchOperators();
  }, []);

  const filteredOperators = operators
    .filter((operator) =>
      normalizeSide(selectedSide) === SIDES.BOTH ||
      (operator.side && normalizeSide(operator.side) === normalizeSide(selectedSide))
    )
    .filter((operator) => {
      if (!searchTerm) return true;
      
      const operatorName = operator.name.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();
      
      // Only return true if the operator name contains the search term
      return operatorName.includes(searchTermLower);
    });

  const handleSideChange = (side) => {
    setSelectedSide(side);
  };

  return (
    <Layout seoProps={{
      title: 'Rainbow Six Siege Operators | Explore All Operators',
      description: 'Learn about all Rainbow Six Siege operators, their abilities, loadouts, and strategies. Find the best operator for your playstyle.',
      keywords: `Rainbow Six Siege operators, Siege operator abilities, Siege operator strategies, R6S operators, ${SIDES.ATTACK}ers, ${SIDES.DEFEND}ers, operator loadouts`,
      url: window.location.href,
      image: '/images/general/logo.png',
      canonicalUrl: `${window.location.origin}/siege/hub/operators`
    }}>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Operators</h1>

        <div className="mb-4">
          <SideFilter 
            selectedSide={selectedSide} 
            onSideChange={handleSideChange} 
            showUniversal={false}
          />
        </div>

        <div className="mb-4">
          <SearchFilter placeholder="Search operator..." searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-4">
          {filteredOperators.map((operator) => (
            <GridOperatorCard 
              key={operator.id}
              name={operator.name}
              fileName={operator.fileName || operator.name}
              linkTo={`/siege/hub/operators/${operator.fileName || operator.name}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HubOperators;