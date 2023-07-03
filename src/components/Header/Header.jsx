import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Location from "../Location/Location";



const Header = () => {
  return (
    <>
      <section className="section1 mt-14 gap-2 mb-4">
        <div className="text-[64px] font-bold text-[#FFFFFF]">
          Your Personal <p>Assistant</p>
        </div>
        <div className="gap-2">
          <p className=" text-[#FFFFFF]">
            One-step solution for your services,Order any services any time
          </p>
        </div>
      </section>

      <section className="section2 mt-16 flex gap-5  justify-center">
        <div>
          <Location></Location>
        </div>
        <div>
          <SearchBar></SearchBar>
        </div>
      </section>
    </>
  );
};

export default Header;
