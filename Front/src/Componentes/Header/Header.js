import { FaBars } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import PrimaryNav from "./PrimaryNav";
import Social from "./Social";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <Menu>
        <nav className=" text-white bg-blue-400">
          <div className="px-6 py-4 mx-auto">
            <div
              className="flex items-center justify-between
              h-8"
            >
              <div className="flex " id="logo block">
                <Logo />
              </div>
              <nav
                className="hidden flex justify-around md:block md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l 
                md:border-gray-400 "
                id="secondary nav"
              >
                <PrimaryNav />
              </nav>

              <div
                className=" hidden md:block items-center 
              border-0 py-1 px-3 text-base"
              >
                <Social userInfo={userInfo} />
              </div>

              <Menu.Button>
                <button
                  className="cursor-pointer text-xl leading-none px-3 py-1
                  rounded block md:hidden lg:outline-none focus:outline-none"
                  type="button"
                >
                  <FaBars />
                </button>
              </Menu.Button>
            </div>
          </div>
          <Menu.Items>
            <MobileMenu />
          </Menu.Items>
        </nav>
      </Menu>
    </div>
  );
};

export default Header;
