import React from 'react'
import { Link } from 'react-router-dom';

const BodyCard = ({info}) => {
    console.log(info.id);
    if (!info?.snippet || !info?.statistics) return null;

    const{snippet , statistics} = info ;
    const {thumbnails , title , channelTitle} = snippet;
    const{viewCount} = statistics;
    

    const count = (viewCount) => {
      if (!viewCount)return null ;
      if (viewCount > 1000000) {
        return (viewCount / 1000000).toFixed(1) + 'M';
      }

       if (viewCount > 1000) {
        return (viewCount / 1000).toFixed(1) + 'K';
      }
      return viewCount;
    }

  return (
    <div className=' bg-gray-100 w-full cursor-pointer overflow-hidden rounded-md shadow-md hover:shadow-lg'>
      <Link to={"watch?v=" + info.id}>
        <img src={thumbnails?.medium?.url} alt="thumbnail" className='w-full object-cover'/>
        <div className='p-2'>
          <p className='font-semibold text-sm mb-1'>{title}</p>
          <p className='text-xs text-gray-600 mb-1'>{channelTitle}</p>
          <p className='text-xs text-gray-500'>{count(viewCount)}</p>
        </div>  
      </Link>    
    </div>
  )
}

export default BodyCard;