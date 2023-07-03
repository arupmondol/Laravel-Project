import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Img6 from "../../assets/image6.png";
import AppleLogo from "../../assets/Apple logo.jpg";
import GoogleLogo from "../../assets/Google Play logo.jpg"

const DownLoadOurApp = () => {
  return (
    <div>
      <div className="relative mx-auto w-[1200px] h-[664px]">
        <div className="absolute top-[194px] left-[calc(50%_-_600px)] rounded-11xl bg-slategray-100 w-[1200px] h-[470px]" />
        <div className="absolute top-[0px] left-[70px] flex flex-row items-end justify-start gap-[44px]">
          <img
            className="relative rounded-[33px] w-[284px] h-[594px] object-cover"
            alt=""
            src={Img6}
          />
          <div className="flex flex-col items-start justify-start gap-[33px]">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="relative text-green-600 font-montserrat  capitalize font-bold">
                DOWNLOAD OUR APP
              </div>
              <b className="relative text-21xl font-montserrat -ml-3  font-bold capitalize inline-block text-white w-[732px]">
                Any Service, Any Time, Anywhere.
              </b>
              <div className="relative font-montserrat   text-left leading-[150%] text-gray-500 inline-block w-[732px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </div>
            </div>
            <form className="w-[724px] h-[52px] relative">
              <div className="relative">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Type Here"
                  className="w-full p-4 text-black rounded-full bg-white "
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2  py-3 px-6 border-none bg-green-500 rounded-full">
                 <p>Subscribe</p>
                </button>
              </div>
            </form>
            <div className="flex flex-row items-start justify-start gap-[24px] text-3xs text-white font-metropolis">
              <div className="relative w-[140px] h-[54.27px]">
                <div className="absolute h-[103.69%] w-[101.43%] top-[-1.84%] right-[-0.71%] bottom-[-1.84%] left-[-0.71%] rounded-lg bg-darkslategray shadow-[0px_1px_0px_rgba(255,_255,_255,_0.1)] box-border border-[1px] border-solid border-black" />
                <div className="absolute h-[55.37%] w-[59.29%] top-[21.83%] right-[10%] bottom-[22.8%] left-[30.71%]">
                  <div className="absolute h-[36.12%] w-[53.01%] top-[0%] left-[0%] font-medium inline-block">
                    Get it On
                  </div>
                  <b className="absolute h-[50.57%] w-full top-[49.43%] left-[0%] text-sm inline-block">
                    Google Play
                  </b>
                </div>
                <img
                  className="absolute h-[51.44%] w-[16.49%] top-[23.51%] right-[74.22%] bottom-[25.05%] left-[9.29%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={GoogleLogo}
                />
              </div>
              <div className="relative w-[140px] h-[54.27px]">
                <div className="absolute h-[103.69%] w-[101.43%] top-[-1.84%] right-[-0.71%] bottom-[-1.84%] left-[-0.71%] rounded-lg bg-darkslategray shadow-[0px_1px_0px_rgba(255,_255,_255,_0.1)] box-border border-[1px] border-solid border-black" />
                <img
                  className="absolute w-[16.43%] top-[calc(50%_-_14.87px)] right-[75%] left-[8.57%] max-w-full overflow-hidden h-[30px]"
                  alt=""
                  src={AppleLogo}
                />
                <div className="absolute h-[55.37%] w-[59.29%] top-[21.83%] right-[11.43%] bottom-[22.8%] left-[29.29%]">
                  <div className="absolute h-[36.12%] w-full top-[0%] left-[0%] font-medium inline-block">
                    Download on the
                  </div>
                  <b className="absolute h-[50.57%] w-[85.54%] top-[49.43%] left-[0%] text-sm inline-block">
                    App Store
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownLoadOurApp;
