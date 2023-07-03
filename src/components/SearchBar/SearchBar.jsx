import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <form className='w-[500px] relative'>
      <div className='relative'>
        <input type="search" name="" id="" placeholder='Type Here' className='w-full p-4 text-black rounded-full bg-white ' />
        <button className='absolute right-1 top-1/2 -translate-y-1/2  py-3 px-6 border-none bg-green-500 rounded-full'>
           <AiOutlineSearch fontSize="23px" />
        </button>
      </div>
     
    </form>
  )
}

export default SearchBar