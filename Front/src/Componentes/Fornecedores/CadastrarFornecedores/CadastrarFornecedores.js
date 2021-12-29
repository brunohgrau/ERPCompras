import FornecedorForm from "../FornecedorForm";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { criarFornecedor } from "../../api";

const CadastrarFornecedores = () => {
  const navigate = useNavigate();

  // Cadastrar Fornecedor

  const { mutateAsync, isLoading } = useMutation(criarFornecedor);

  // Handlers

  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    navigate({ pathname: `/fornecedores` });
  };

  return (
    <div>
      <section className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <div>
          <h1 className="text-2xl mt-16 text-gray-600 font-bold">
            {" "}
            Cadastrar Fornecedor
          </h1>
        </div>
        <div className="flex mt-8  justify-evenly ">
          <FornecedorForm onFormSubmit={onFormSubmit} />
        </div>
      </section>
    </div>
  );
};

export default CadastrarFornecedores;
