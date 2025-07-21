import React, { useEffect, useState } from 'react';
import {YOUTUBE_API} from '../../utils/constant';
import BodyCard from './BodyCard';

const BodyContainer = () => {
    const [videos , setVideos ] = useState([]);


   useEffect(() => {
        const getVideos = async() => {
            const data = await fetch(YOUTUBE_API);
            const res = await data.json();
            setVideos(res.items);
        }

        getVideos();
   } , []);

  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
        {videos && videos.map ((video , index) =>
          (<BodyCard key={index} info={video}></BodyCard>))}
    </div>
  )
}

export default BodyContainer;