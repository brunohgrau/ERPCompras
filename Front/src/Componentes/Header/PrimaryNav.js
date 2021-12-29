import { FaProductHunt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PrimaryNav = () => {
  const navigate = useNavigate();
  const comprasHandler = () => {
    navigate({ pathname: `/cadastrarcompra` });
  };
  const fornecedoresHandler = () => {
    navigate({ pathname: `/fornecedores` });
  };
  const produtosHandler = () => {
    navigate({ pathname: `/produtos` });
  };

  return (
    <div className="flex ">
      <a
        className="mr-5 hover:text-gray-200  inline-flex cursor-pointer"
        onClick={comprasHandler}
      >
        <FaLaptop className="w-4 h-4 mt-1" />
        <span className="ml-1"> Nova Compra</span>
      </a>
      <a
        className="mr-5 hover:text-gray-200  inline-flex cursor-pointer"
        onClick={fornecedoresHandler}
      >
        <FaLaptop className="w-4 h-4 mt-1" />
        <span className="ml-1"> Fornecedores </span>
      </a>
      <a
        className="mr-5 hover:text-gray-200  inline-flex cursor-pointer
     "
        onClick={produtosHandler}
      >
        <FaLaptop className="w-4 h-4 mt-1" />
        <span className="ml-1"> Produtos </span>
      </a>
    </div>
  );
};

export default PrimaryNav;
