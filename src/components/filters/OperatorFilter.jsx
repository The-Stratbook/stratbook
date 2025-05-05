import React, { useState } from "react";
import OperatorFilterModal from "../modals/OperatorFilterModal";

const OperatorFilter = ({ selectedOperator, onSelectOperator, selectedSide, onSideChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        className="btn btn-primary w-full"
        onClick={() => setIsModalOpen(true)}
      >
        {selectedOperator ? `Selected Operator: ${selectedOperator.name}` : "Select an Operator"}
      </button>
      {isModalOpen && (
        <OperatorFilterModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelectOperator={(operator) => {
            onSelectOperator(operator);
            setIsModalOpen(false);
          }}
          selectedSide={selectedSide}
          onSideChange={onSideChange}
          selectedOperator={selectedOperator}
        />
      )}
    </div>
  );
};

export default OperatorFilter;
