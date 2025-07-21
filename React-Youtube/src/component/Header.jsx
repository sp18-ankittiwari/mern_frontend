import { FaYoutube, FaSearch, FaBell , FaMicrophone } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';


const Header = () => {
    return (
    <div className='flex items-center justify-between max-w-full bg-white shadow-md px-4 py-3'>
            <div className=' flex gap-4'>
                <FaBars className='w-5 h-5 flex m-auto text-gray-700'/>
                <div className='flex gap-1 text-center items-center text-2xl font-semibold text-red-700'>
                    <FaYoutube></FaYoutube>
                    <span className='text-2xl font-semibold'>Youtube</span>
                </div>
            </div>

            <div className="flex items-center bg-gray-100 rounded-full w-full max-w-md px-4 py-2">
                <input type="text" placeholder='Search' className='flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500'/>
                <FaSearch className="text-gray-500 cursor-pointer ml-2"/>
                <FaMicrophone className="text-gray-500 cursor-pointer ml-2"/>
            </div>

            <div className="flex  text-center items-center">
                <FaBell className='w-6 h-6 mx-10'/>
                <img src="data:image/png;base64,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" alt="profile icon" className='w-10 h-10'/>
            </div>
        </div>
    )
};


export default Header ;







