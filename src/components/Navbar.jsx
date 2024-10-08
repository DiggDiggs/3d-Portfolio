import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { style } from "../style";
import { navLink } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  return (
    <nav
      className={`
        ${style.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    ></nav>
  );
};

export default Navbar;
