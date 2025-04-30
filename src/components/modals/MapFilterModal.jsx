import React, { useEffect, useState } from "react";

const MapFilterModal = ({ isOpen, onClose, onSelectMap, selectedMap }) => {
  const [maps, setMaps] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState("All"); // Default to "All"

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await fetch('/data/maps.json');
        if (!response.ok) throw new Error('Failed to fetch maps');
        const data = await response.json();
        setMaps(data);
      } catch (error) {
        console.error('Error fetching maps:', error);
      }
    };

    fetchMaps();
  }, []);

  // Extract unique playlists from maps
  const uniquePlaylists = [
    "All",
    ...Array.from(
      new Set(
        maps.flatMap((map) => map.playlist || []) // Flatten and de-duplicate playlists
      )
    ).sort(),
  ];

  // Filter maps based on the selected playlist
  const filteredMaps = selectedPlaylist && selectedPlaylist !== "All"
    ? maps.filter((map) =>
        map.playlist && map.playlist.some((p) => p.toLowerCase() === selectedPlaylist.toLowerCase())
      )
    : maps; // Show all maps if no specific playlist is selected

  if (!isOpen) return null;

  return (
    <div className="modal modal-open flex justify-center items-center py-6">
      <div className="modal-box bg-base-100 w-[130%] max-w-5xl relative pt-12">
        <button
          className="absolute top-2 right-2 btn btn-sm btn-circle"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Select a Rainbow Six Siege Map</h2>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => {
              onSelectMap(""); // Reset map selection
              onClose();
            }}
          >
            Reset Filter
          </button>
        </div>
        <div className="tabs tabs-boxed w-full mb-4 rounded-lg overflow-hidden">
          {uniquePlaylists.map((playlist, index) => (
            <button
              key={playlist}
              className={`tab transition-all duration-300 ${
                selectedPlaylist === playlist
                  ? "tab-active bg-primary text-white transform scale-105"
                  : "bg-base-200"
              }`}
              style={{
                borderTopLeftRadius: index === 0 ? "0.5rem" : "0",
                borderBottomLeftRadius: index === 0 ? "0.5rem" : "0",
                borderTopRightRadius: index === uniquePlaylists.length - 1 ? "0.5rem" : "0",
                borderBottomRightRadius: index === uniquePlaylists.length - 1 ? "0.5rem" : "0",
              }}
              onClick={() => setSelectedPlaylist(playlist)}
            >
              {playlist}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {filteredMaps.map((map) => (
            <div
              key={map.id}
              className={`card bg-base-200 shadow-lg cursor-pointer relative ${
                selectedMap === map.name ? "opacity-75" : ""
              }`}
              onClick={() => {
                onSelectMap(map.name);
                onClose();
              }}
            >
              <figure>
                <img
                  src={`/images/maps/${map.name}.jpg`}
                  alt={`Rainbow Six Siege ${map.name} map layout`}
                  className="w-full h-32 object-cover rounded-t-lg"
                  loading="lazy"
                  onError={(e) => (e.target.src = "/images/tips/default.jpg")}
                />
              </figure>
              <div className="card-body text-black text-center py-2 rounded-b-lg">
                <h3 className="text-sm font-bold">{map.name}</h3>
              </div>
              {selectedMap === map.name && (
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

export default MapFilterModal;
