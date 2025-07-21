import React, { useState, useEffect } from 'react';
import BodyCard from './body/BodyCard';
import { YOUTUBE_API } from '../utils/constant';

const SuggestedVideos = () => {
  const [suggestedVideos, setSuggestedVideos] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const res = await fetch(YOUTUBE_API);
        const data = await res.json();
        setSuggestedVideos(data.items || []); 
      } catch (err) {
        console.error("Failed to fetch suggestions", err);
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Suggested Videos</h2>
      {Array.isArray(suggestedVideos) &&
        suggestedVideos.map((video, index) => (
          <BodyCard key={index} info={video} />
        ))
      }
    </div>
  );
};

export default SuggestedVideos;
