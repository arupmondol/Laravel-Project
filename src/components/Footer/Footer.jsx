import React from 'react';

import Tlogo from '../../assets/Tlogo.png';
import Social from '../../assets/Social.jpg';
import { BiLogoFacebook } from 'react-icons/bi';
import {AiFillLinkedin} from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';



const Footer = () => {
  return (
    <div className=''>
       <div className="relative w-[1440px] h-[455px] text-base text-gray-600">
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-slategray-100 h-[555px] flex flex-col py-[30px] px-[60px] box-border items-start justify-start">
            <img
              className="relative w-[1319.62px] h-[648.62px] hidden opacity-[0.35]"
              alt=""
              src="/vector-60.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_240px)] right-[120px] bottom-[31.54px] left-[120px] flex flex-col items-center justify-start gap-[40px]">
            <div className="w-[1200px] flex flex-row items-start justify-between">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <img
                  className="relative w-[98px] h-[98px] object-cover"
                  alt=""
                  src={Tlogo}
                />
                <div className="relative w-[300px] h-24">
                  <div className="absolute text-left top-[0px] left-[0px] leading-[150%] inline-block w-[300px]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </div>
                </div>
               <div className='relative gap-2 flex'>
                   <button className='p-[10px] bg-white rounded-full border-none'><BiLogoFacebook color='black' size='25px' /></button>
                   <button className='p-[10px] bg-white rounded-full border-none'><AiFillLinkedin color='black' size='25px' /></button>
                   <button className='p-[10px] bg-white rounded-full border-none' ><BsTwitter color='black' size='25px' /></button>
               </div>
              </div>
              <div className="relative w-[103.33px] h-[187.46px]">
                <div className="absolute top-[46.46px] left-[0px] leading-[150%]">
                  Integrations
                </div>
                <div className="absolute top-[85.46px] left-[0px] leading-[150%]">
                  Hello
                </div>
                <div className="absolute top-[124.46px] left-[0px] leading-[150%]">
                  Intercom
                </div>
                <div className="absolute top-[163.46px] left-[0px] leading-[150%]">
                  Customer
                </div>
                <b className="absolute top-[0px] left-[0.33px] text-5xl leading-[150%] capitalize text-white">
                  Address
                </b>
              </div>
              <div className="relative w-[98px] h-[226.27px]">
                <div className="absolute top-[46.27px] left-[0px] leading-[150%]">
                  Our Blog
                </div>
                <div className="absolute top-[85.27px] left-[0px] leading-[150%]">
                  Customers
                </div>
                <div className="absolute top-[124.27px] left-[0px] leading-[150%]">
                  Our Team
                </div>
                <div className="absolute top-[163.27px] left-[0px] leading-[150%]">
                  Careers
                </div>
                <div className="absolute top-[202.27px] left-[0px] leading-[150%]">
                  Integrations
                </div>
                <b className="absolute top-[0px] left-[0px] text-5xl leading-[150%] capitalize text-white">
                  About
                </b>
              </div>
              <div className="relative w-[124px] h-[226.27px]">
                <div className="absolute top-[46.27px] left-[0px] leading-[150%]">
                  Test Zoom
                </div>
                <div className="absolute top-[85.27px] left-[0px] leading-[150%]">
                  Account
                </div>
                <div className="absolute top-[124.27px] left-[0px] leading-[150%]">
                  Support Center
                </div>
                <div className="absolute top-[163.27px] left-[0px] leading-[150%]">
                  Live Training
                </div>
                <div className="absolute top-[202.27px] left-[0px] leading-[150%]">
                  Accessibility
                </div>
                <b className="absolute top-[0px] left-[0px] text-5xl leading-[150%] capitalize text-white">
                  Support
                </b>
              </div>
            </div>
            
            <div class=" border-2 w-[1200px]  h-1 my-auto mx-auto border-white bg-white"></div>

            <div className="flex flex-row items-center justify-start gap-[4px] text-sm text-white">
              <div className="relative tracking-[-0.02em]">Copyright</div>
              <img
                className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                alt=""
                src="/copyright-1.svg"
              />
              <div className="relative tracking-[-0.02em]">
                2023 All right reserved
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer