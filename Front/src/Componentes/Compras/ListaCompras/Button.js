import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const cadastrarCompraHandler = () => {
    navigate({ pathname: `/cadastrarcompra` });
  };
  return (
    <button
      class="bg-blue-500  font-semibold 
 text-white py-2 px-4 border border-blue-500 
  hover:border-transparent rounded"
      onClick={cadastrarCompraHandler}
    >
      Nova Compra
    </button>
  );
};

export default Button;
