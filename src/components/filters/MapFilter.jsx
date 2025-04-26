import React, { useState } from "react";
import MapFilterModal from "../modals/MapFilterModal";

const MapFilter = ({ selectedMap, onSelectMap }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full"> {/* Ensure the div takes full width */}
      <button
        className="btn btn-primary w-full" // Make the button full width
        onClick={() => setIsModalOpen(true)}
      >
        {selectedMap ? `Selected Map: ${selectedMap}` : "Select a Map"}
      </button>
      {isModalOpen && (
        <MapFilterModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelectMap={(map) => {
            onSelectMap(map);
            setIsModalOpen(false);
          }}
          selectedMap={selectedMap}
        />
      )}
    </div>
  );
};

export default MapFilter;
