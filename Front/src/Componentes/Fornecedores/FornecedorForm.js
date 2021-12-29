import { useForm } from "react-hook-form";

const CompraForm = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { register, handleSubmit } = useForm({ defaultValues });
  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <>
      <div>
        <section className="container mx-auto px-4 sm:px-8 max-w-4xl ">
          <div className="flex mt-8  justify-evenly ">
            <form className="flex" onSubmit={onSubmit}>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="nome"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Nome
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("nome", { required: true })}
                      id="nome"
                      name="nome"
                      type="string"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                      focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="cnpj"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    CNPJ/CPF
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("cnpj", { required: true })}
                      id="cnpj"
                      name="cnpj"
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("email", { required: true })}
                      id="email"
                      name="email"
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="telefone"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Telefone
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("telefone", { required: true })}
                      id="telefone"
                      name="telefone"
                      type="string"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="status"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("status", { required: true })}
                      id="status"
                      name="status"
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>

                <button
                  class=" mt-4 col-start-2  bg-blue-500 font-semibold 
text-white py-2 px-4 border border-blue-500 
hover:border-transparent rounded"
                >
                  Aplicar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompraForm;
