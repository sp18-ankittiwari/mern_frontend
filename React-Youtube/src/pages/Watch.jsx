import React from "react";
import { useSearchParams } from "react-router-dom";
import BodyCard from "../component/body/BodyCard";
import SuggestedVideos from "../component/SuggestedVideos";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  if (!id) {
    return <div className="text-center p-4">Video ID is missing</div>;
  }

  return (
    <div className=" flex gap-4 p-6"> 
      <div className="rounded-md">  
      <iframe
        className="w-220 h-[400px] rounded-md px-6"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen >
        </iframe>
      </div>

      <SuggestedVideos className= "flex flex-col gap-2"/>
    </div>
  );
};

export default Watch;
