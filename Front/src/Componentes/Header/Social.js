import { FaFacebook } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import { logout } from "../../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Social = ({ userInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const userHandler = () => {
    navigate({ pathname: `/edituser` });
  };

  return (
    <Menu>
      <div className="flex">
        <Menu.Button>
          <button
            class="flex  items-center text-sm font-bold  inline-block
            mr-4 py-2  whitespace-nowrap text-white"
          >
            {userInfo ? <span className="mr-4"> {userInfo.name} </span> : null}

            <FaUserAlt className="h-6 w-6" />
          </button>
        </Menu.Button>
        <Menu.Items>
          <div className="origin-top-right absolute right-0 mt-12 w-60 md:w-52 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
            <Menu.Item>
              {({ active }) => (
                <div className="block  px-4 py-2 text-md text-gray-700 ">
                  <span class="flex flex-col">
                    <span className="cursor-pointer" onClick={logoutHandler}>
                      Logout
                    </span>
                  </span>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="block  px-4 py-2 text-md text-gray-700 ">
                  <span class="flex flex-col">
                    <span className="cursor-pointer" onClick={userHandler}>
                      Usuário
                    </span>
                  </span>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default Social;
