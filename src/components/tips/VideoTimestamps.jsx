import React from 'react';
import { Clock } from 'lucide-react';

const VideoTimestamps = ({ timestamps, onTimestampClick }) => {
  if (!timestamps || timestamps.length === 0) return null;

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold flex items-center">
        <Clock size={20} className="mr-2" />
        Key Moments in Video
      </h3>
      <div className="mt-2 space-y-2">
        {timestamps.map((timestamp, idx) => (
          <div key={idx} className="flex items-center">
            <button
              onClick={() => onTimestampClick(timestamp.time)}
              className="inline-flex items-center text-primary hover:underline"
            >
              <span className="font-mono bg-base-300 px-2 py-1 rounded mr-2">{timestamp.time}</span>
              {timestamp.description}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTimestamps;