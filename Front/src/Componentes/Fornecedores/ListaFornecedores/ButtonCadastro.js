import { useNavigate } from "react-router-dom";

const ButtonCadastro = () => {
  const navigate = useNavigate();
  const cadastrarFornecedoresHandler = () => {
    navigate({ pathname: `/cadastrarfornecedores` });
  };

  return (
    <button
      class="bg-blue-500  font-semibold 
  text-white py-2 px-4 border border-blue-500 
  hover:border-transparent rounded"
      onClick={cadastrarFornecedoresHandler}
    >
      Cadastrar
    </button>
  );
};

export default ButtonCadastro;
