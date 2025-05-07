import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from '../layouts/Layout';
import SearchFilter from '../components/filters/SearchFilter';
import SideFilter from '../components/filters/SideFilter';

const HubOperators = () => {
  const [operators, setOperators] = useState([]);
  const [selectedSide, setSelectedSide] = useState(""); 
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchOperators = async () => {
      try {
        const response = await fetch('/data/siege/operatorsIndex.json');
        if (!response.ok) throw new Error('Failed to fetch operators index');
        const operatorFiles = await response.json();

        console.log('operatorFiles', operatorFiles);
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
      selectedSide === "Both" ||
      selectedSide === "All" ||
      selectedSide === "" ||
      (operator.side && operator.side.toLowerCase() === selectedSide.toLowerCase())
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
      keywords: 'Rainbow Six Siege operators, Siege operator abilities, Siege operator strategies, R6S operators, Siege attackers, Siege defenders, operator loadouts',
      url: window.location.href,
      image: '/images/general/logo.png',
      canonicalUrl: `${window.location.origin}/siege/hub/operators`
    }}>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Operators</h1>

        <div className="mb-4">
          <SideFilter selectedSide={selectedSide} onSideChange={handleSideChange} />
        </div>

        <div className="mb-4">
          <SearchFilter placeholder="Search operator..." searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        <div className="grid grid-cols-5 gap-5 mt-4">
          {filteredOperators.map((operator) => (
            <Link
              to={`/siege/hub/operators/${operator.fileName || operator.name}`}
              className="block card bg-base-200 relative group cursor-pointer"
              key={operator.id}
            >
              <figure className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`/images/operators/${operator.fileName || operator.name}.png`}
                  alt={operator.fileName || operator.name}
                  className="w-full h-50 object-cover object-top rounded-t-lg"
                  onError={(e) => (e.target.src = "/images/operators/default.png")}
                />
                <img
                  src={`/images/operators/${operator.fileName || operator.name}_logo.png`}
                  alt={`${operator.fileName || operator.name} Icon`}
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-white shadow-md"
                  onError={(e) => (e.target.src = "/images/operators/default_logo.png")}
                />
              </figure>
              <div className="card-body text-black text-center py-2 rounded-b-lg">
                <h3 className="text-sm font-bold text-base-content">{operator.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HubOperators;