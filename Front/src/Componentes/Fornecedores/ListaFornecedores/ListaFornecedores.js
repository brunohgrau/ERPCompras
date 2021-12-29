import TableFornecedores from "./TableFornecedores";
import { useQuery } from "react-query";
import { getAllFornecedores } from "../../api";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";

const ListaFornecedores = () => {
  // Fetch Fornecedores

  const { data: fornecedores, error, isLoading } = useQuery(
    "fornecedores",
    getAllFornecedores
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message> {error.message} </Message>
      ) : (
        <TableFornecedores data={fornecedores} />
      )}
    </>
  );
};

export default ListaFornecedores;
