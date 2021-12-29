import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import { useNavigate, useParams } from "react-router-dom";
import FornecedorForm from "../FornecedorForm";
import { getFornecedor, updateFornecedor } from "../../api";

const EditFornecedor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch Single Compra
  const { data, error, isLoading } = useQuery(
    ["fornecedor", { id }],
    getFornecedor
  );

  // Edit Single Compra

  const { mutateAsync, isLoading: isMutating } = useMutation(updateFornecedor);

  const queryClient = useQueryClient();
  queryClient.invalidateQueries("fornecedor");
  queryClient.refetchQueries("fornecedor", { active: true });

  // Handlers

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id });
    navigate({ pathname: `/fornecedores` });
  };

  return (
    <div>
      <section className="container mx-auto px-4 sm:px-8 max-w-4xl ">
        <h1 className="text-2xl mt-16 text-gray-600 font-bold">
          Editar Fornecedores
        </h1>

        <div className="flex mt-8  justify-evenly ">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message> {error.message} </Message>
          ) : (
            <FornecedorForm defaultValues={data} onFormSubmit={onFormSubmit} />
          )}
        </div>
      </section>
    </div>
  );
};

export default EditFornecedor;
