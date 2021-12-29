import { useForm } from "react-hook-form";
import { getAllFornecedores } from "../api";
import { useQuery } from "react-query";

const CompraForm = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { data } = useQuery("compras", getAllFornecedores);

  /*   const fornecedores = data?.map((fornecedor) => fornecedor.nome);
  console.log(fornecedores); */

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({ defaultValues });

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
                    htmlFor="data"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Data
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("data", { required: true })}
                      id="data"
                      name="data"
                      type="string"
                      placeholder="MM-DD-AAAA"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                      focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="nf"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    NF
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("nf", { required: true })}
                      id="nf"
                      name="nf"
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="fornecedor"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Fornecedor
                  </label>
                  <div className="mt-1">
                    <select
                      {...register("fornecedor")}
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    >
                      {data?.map((fornecedor) => (
                        <option value={fornecedor.nome}>
                          {fornecedor.nome}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="vencimento"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Vencimento
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("vencimento", { required: true })}
                      id="vencimento"
                      name="vencimento"
                      type="string"
                      placeholder="MM-DD-AAAA"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="pagamento"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Pagamento
                  </label>
                  <div className="mt-1">
                    <select
                      {...register("pagamento")}
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    >
                      <option value="Dinheiro">Dinheiro</option>
                      <option value="Cartão">Cartão</option>
                      <option value="Á Vista">Á Vista</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="valorTotal"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Valor
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("valorTotal", { required: true })}
                      id="valorTotal"
                      name="valorTotal"
                      type="number"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="produto[nome]"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Produto
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("produto[nome]")}
                      id="produto[nome]"
                      name="produto[nome]"
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="produto[qte]"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Quantidade
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("produto[qte]")}
                      id="produto[qte]"
                      name="produto[qte]"
                      type="string"
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
