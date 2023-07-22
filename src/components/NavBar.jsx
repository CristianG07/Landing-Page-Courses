// import images
import { logo, lock, hamburgerMenu, close } from "../assets/";

// import hook of react
import { useState } from "react";

// import components
import { Nav, NavMobile } from "./";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    return setToggle(!toggle);
  };

  return (
    <section className="w-full h-20 bg-white border-b">
      <div className="px-10 md:px-1 lg:max-w-7xl md:max-w-4xl max-w-2xl mx-auto h-full flex justify-between items-center">
        <div className="w-[110px] lg:w-auto">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <Nav />
        </div>

        <div className="hidden md:flex">
          <button className="flex px-6 gap-2 items-center justify-center bg-transparent">
            <img src={lock} />
            Login
          </button>
          <button className="bg-primary px-8 py-3 rounded-md text-white font-bold">
            Sing Up For Free
          </button>
        </div>

        <div className="md:hidden cursor-pointer z-20" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>
      <div>
        <NavMobile toggle={toggle} />
      </div>
    </section>
  );
};
export default NavBar;
