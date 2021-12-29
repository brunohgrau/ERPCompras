import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { removeCompra } from "../../api";
import { Link } from "react-router-dom";

const ButtonAçõesCompras = ({ id }) => {
  const [hidden, setHidden] = useState(true);
  const queryClient = useQueryClient();

  // Delete Compras

  const { mutateAsync } = useMutation(removeCompra);
  const remove = async (id) => {
    await mutateAsync(id);
    queryClient.invalidateQueries("compras");
  };

  const onClickHandler = () => {
    setHidden(!hidden);
  };

  return (
    <div class="flex items-center">
      <button
        class="bg-transparent hover:bg-blue-500 text-blue-700 
            font-semibold hover:text-white py-2 px-2  border border-blue-500  
            hover:border-transparent rounded inline-flex items-center"
        onClick={() => onClickHandler()}
      >
        Ações
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {hidden ? null : (
        <div class="relative mt-8">
          {/*   <!-- Menu list --> */}
          <div
            class="absolute  right-0 z-20 w-24 mt-2 overflow-hidden bg-white 
        shadow-xl  "
          >
            <Link
              to="#"
              class="block px-4 py-2 text-sm text-gray-800 border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
              onClick={() => {
                remove(id);
              }}
            >
              Apagar
            </Link>
            <Link
              to={`/editcompra/${id}`}
              class="block px-4 py-2 text-sm text-gray-800 border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              Editar
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonAçõesCompras;
