import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import { useNavigate, useParams } from "react-router-dom";
import CompraForm from "../CompraForm";
import { getCompra, updateCompra } from "../../api";

const EditCompra = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch Single Compra
  const { data, error, isLoading } = useQuery(["compra", { id }], getCompra);

  // Edit Single Compra

  const { mutateAsync, isLoading: isMutating } = useMutation(updateCompra);

  const queryClient = useQueryClient();
  queryClient.invalidateQueries("compra");
  queryClient.refetchQueries("compra", { active: true });

  // Handlers

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id });
    navigate({ pathname: `/home` });
  };

  return (
    <div>
      <section className="container mx-auto px-4 sm:px-8 max-w-4xl ">
        <h1 className="text-2xl mt-16 text-gray-600 font-bold">
          Editar Compra
        </h1>

        <div className="flex mt-8  justify-evenly ">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message> {error.message} </Message>
          ) : (
            <CompraForm defaultValues={data} onFormSubmit={onFormSubmit} />
          )}
        </div>
      </section>
    </div>
  );
};

export default EditCompra;
