import { FaTablet } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";

const MobileMenu = () => {
  return (
    <>
      <div className="flex flex-grow items-center md:hidden">
        <ul className="flex flex-col  list-none mr-auto">
          <li className="flex flex-col px-4  ">
            <a
              className="flex  cursor-pointer  text-white
                text-sm uppercase font-bold py-4 items-center"
            >
              <span className=""> Fornecedores </span>
            </a>
            <a
              className="flex  cursor-pointer  text-white 
                 text-sm uppercase font-bold py-4"
            >
              <span className=""> Produtos </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
