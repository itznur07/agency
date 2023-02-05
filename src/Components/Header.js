import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Header = () => {
    
  return (
    <>
      <header className="bg-[dodgerblue] h-screen">
        {/* Navbar here */}
        <Navbar />
        {/* Navbar ends here*/}
        {/* Banner here */}
        <Banner />
        {/* Banner ends here */}
      </header>
    </>
  );
};

export default Header;
