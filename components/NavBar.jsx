import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/wovies.png";

export const NavBar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <Image src={logo} alt="logo"></Image>
      </Link>
    </div>
  );
};
