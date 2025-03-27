import { NavLink } from "react-router-dom";
import { useState } from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/design/Header";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 bg-gray-900 lg:bg-gray-800/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <NavLink className="block w-[12rem] xl:mr-8" to="/">
          <span className="text-white text-2xl font-bold tracking-wide">
            Unfolded
          </span>
        </NavLink>

        <nav
          className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-gray-900 lg:static lg:flex lg:mx-auto lg:bg-transparent ${
            openNavigation ? "flex" : "hidden"
          }`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.url}
                onClick={() => setOpenNavigation(false)}
                className={({ isActive }) =>
                  `block relative font-code text-2xl uppercase text-white transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:text-xs lg:font-semibold ${
                    isActive ? "text-yellow-400" : "text-white/50"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
