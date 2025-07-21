import React from 'react'
import { sidebarData } from '../../utils/SidebarData';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div>
        {
            sidebarData.map((SidebarContent, index) => (
                <div key={index} className='p-3'>
                    <div className='font-semibold mb-2'> {SidebarContent.section} </div>
                    {
                        SidebarContent.items.map((content , itemIndex) => (
                            <SidebarItem key = {itemIndex} {...content} />
                        ))
                    }
                    <hr className="h-px bg-gray-300 border-0 mt-10" />

                </div>
            ))
        }
    </div>
  )
}

export default Sidebar;