import React from 'react';
import Sidebar from '../component/sidebar/Sidebar';
import FilterButton from '../component/FilterButton';
import BodyContainer from '../component/body/BodyContainer';

const Home = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div>
            <FilterButton/>
            <BodyContainer/>   
        </div>
    </div>
  )
}

export default Home;