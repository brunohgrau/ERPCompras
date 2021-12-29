import { FaGlobeAmericas } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LogoComponent = () => {
  const navigate = useNavigate();
  const logoHandler = () => {
    navigate({ pathname: `/home` });
  };

  return (
    <>
      <a
        className="flex  items-center text-sm font-bold leading-relaxed inline-block
            mr-4 py-2  whitespace-nowrap uppercase text-white cursor-pointer "
        onClick={logoHandler}
      >
        <FaGlobeAmericas className="h-6 w-6" />
        <span className=" font-bold ml-2 text-white "> ERP COMPRAS</span>
      </a>
    </>
  );
};

export default LogoComponent;
