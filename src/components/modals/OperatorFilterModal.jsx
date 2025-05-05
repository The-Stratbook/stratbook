import React, { useEffect, useState } from "react";
import SideFilter from "../filters/SideFilter";
import SearchFilter from "../filters/SearchFilter";

const OperatorFilterModal = ({ isOpen, onClose, onSelectOperator, selectedSide, onSideChange, selectedOperator }) => {
  const [operators, setOperators] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchOperators = async () => {
      try {
        const response = await fetch('/data/siege/operatorsIndex.json');
        console.log('response', response);
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

  if (!isOpen) return null;

  // Filter operators by search term
  const filteredOperators = operators.filter((operator) => {
    const matchesSide =
      selectedSide === "both" || selectedSide === ""
        ? true
        : operator.side && operator.side.toLowerCase() === selectedSide.toLowerCase();

    const matchesSearch = operator.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesSide && matchesSearch;
  });

  return (
    <div className="modal modal-open">
      <div className="modal-box bg-base-100 w-[130%] max-w-5xl relative pt-12">
        <button
          className="absolute top-2 right-2 btn btn-sm btn-circle"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Select a Rainbow Six Siege Operator</h2>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => {
              onSelectOperator("");
              onClose();
            }}
          >
            Reset Filter
          </button>
        </div>

        <SideFilter selectedSide={selectedSide} onSideChange={onSideChange} />

        <div className="mb-4 py-4">
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search operators..."
          />
        </div>

        <div className="grid grid-cols-5 gap-5 mt-4">
          {filteredOperators.map((operator) => (
            <div
              key={`${operator.id}-${operator.name}`}
              className={`card bg-base-200 relative group cursor-pointer ${
                operator.name === selectedOperator?.name ? "opacity-75" : ""
              }`}
              onClick={() => {
                onSelectOperator(operator);
                onClose();
              }}
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
              {operator.name === selectedOperator?.name && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">✔</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OperatorFilterModal;
