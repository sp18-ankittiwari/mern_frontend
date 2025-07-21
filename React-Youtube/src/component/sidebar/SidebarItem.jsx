import React from 'react'
import * as FaIcons from "react-icons/fa";

const SidebarItem = ({label , icon }) => {
    const IconComponent = FaIcons[icon]; 
  return (
    <div className='flex items-center'>
        <IconComponent />
        <p className='text-gray-900 cursor-pointer p-2'>{label}</p>

    </div>

  )
}

export default SidebarItem;