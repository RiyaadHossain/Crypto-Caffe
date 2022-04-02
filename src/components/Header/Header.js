import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-cyan-600">
      <div className="flex md:justify-between justify-center container mx-auto py-5 px-3 md:px-5">
        <div className="logo font-bold text-3xl font-mono hidden md:block">Crypto Caffe</div>{" "}
        <nav className="flex font-bold">
          <CustomLink className='px-3 text-lg' to={"/"}>Home</CustomLink>
          <CustomLink className='px-3 text-lg' to={"/coins"}>Coins</CustomLink>
          <CustomLink className='px-3 text-lg' to={"/contact"}>Contact</CustomLink>
          <CustomLink className='px-3 text-lg' to={"/about"}>About</CustomLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
