import React from 'react'
import { BsPersonFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import {BiSolidServer} from "react-icons/bi"

const Achivement = () => {
  return (
    <div className='bg-[#3B6F82] mt-16 border-solid border-4 mx-auto w-[1200px] h-[136px] rounded-[70px] grid grid-cols-5'>
      <div className='flex justify-center items-center'>
        <div className=''>
          <div className='bg-white  flex rounded-full items-center justify-center  h-[55px] w-[55px]'>
            <BsPersonFill color="green" fontSize="25px"   />
          </div>
        </div>
        <div className='ml-4'>
          <p  className='text-3xl'>90+</p>
          <p className='text-l'>Clients</p>
        </div>
      </div>

      <div class="border-t border-2 w-1 h-24 my-auto border-white bg-white mx-auto"></div>


  
      
      <div className='flex justify-center items-center'>
        <div className=''>
          <div className='bg-white  flex rounded-full items-center justify-center  h-[55px] w-[55px]'>
            <AiFillStar color="green" fontSize="25px"   />
          </div>
        </div>
        <div className='ml-4'>
          <p  className='text-3xl'>40+</p>
          <p className='text-l'>Reviews</p>
        </div>
      </div>

      <div class="border-t border-2 w-1  h-24 my-auto mx-auto border-white bg-white"></div>

      <div className='flex justify-center items-center'>
        <div className=''>
          <div className='bg-white  flex rounded-full items-center justify-center  h-[55px] w-[55px]'>
            <BiSolidServer color="green" fontSize="25px"   />
          </div>
        </div>
        <div className='ml-4'>
          <p  className='text-3xl'>50+</p>
          <p className='text-l'>Projects</p>
        </div>
      </div>
    </div>
  )
}

export default Achivement