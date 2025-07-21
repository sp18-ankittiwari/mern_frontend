import React from 'react'
import { filterButtonData } from '../utils/FilterButtondata'
const FilterButton = () => {
  return (
    <div className='flex gap-3 py-4 overflow-x-auto overflow-y-hidden'>
        {
            filterButtonData.map((item , index) => (
                <button key={index} className='bg-gray-200 px-4 py-2 rounded-md cursor-pointer text-sm hover:bg-gray-300 transition'> {item}</button>
            ))
        }
    </div>
  )
};
 
export default FilterButton;