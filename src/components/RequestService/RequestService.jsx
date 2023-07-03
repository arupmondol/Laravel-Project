import React from 'react'

import Img7 from "../../assets/image 7.jpg";
import { BsTelephoneFill } from 'react-icons/bs';

const RequestService = () => {
  return (
    <div className='mt-32 mb-32'>
       <div className="bg-slategray-100 grid grid-cols-2 w-[1439px]h-[408px] text-21xl text-white">
          
         <div className=' mx-auto mt-12  pl-16'>
          <p className=' w-[674px]  tracking-[0.02em] leading-[150%] capitalize inline-block'>
          Can’t find your desired service? Let us know 24/7 in 16516.
          </p>
          <div className='flex pl-20 pt-16 gap-5'>
          <button className="btn w-[206px] bg-[#18C15C] text-white border-white rounded-[56px] h-[56px]">Request A Service</button>
          <button className='btn w-[206px] bg-inherit text-white border-white rounded-[56px] h-[56px]'> <BsTelephoneFill /> 01589548968</button>
          </div>
         </div>
         <div className='w-[408px] pr-0'>
         <img
              className=" w-[408px] "
              alt=""
              src={Img7}

            />
         </div>
        </div>
    </div>
  
  )
}

export default RequestService