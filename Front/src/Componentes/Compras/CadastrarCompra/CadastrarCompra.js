import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import CompraForm from "../CompraForm";
import { criarCompra } from "../../api";

const CadastrarCompra = ({ defaultValues }) => {
  const navigate = useNavigate();

  // Cadastrar Compra

  const { mutateAsync, isLoading } = useMutation(criarCompra);

  // Handlers

  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    navigate({ pathname: `/home` });
  };

  return (
    <div>
      <section className="container mx-auto px-4 sm:px-8 max-w-4xl ">
        <h1 className="text-2xl mt-16 text-gray-600 font-bold">
          Cadastrar Compra
        </h1>

        <div className="flex mt-8  justify-evenly ">
          <CompraForm onFormSubmit={onFormSubmit} />
        </div>
      </section>
    </div>
  );
};

export default CadastrarCompra;
