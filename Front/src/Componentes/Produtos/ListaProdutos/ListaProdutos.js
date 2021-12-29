import { useQuery } from "react-query";
import { getAllCompras } from "../../api";
import TableProdutos from "./TableProdutos";

const ListaProdutos = () => {
  return (
    <>
      <TableProdutos />
    </>
  );
};

export default ListaProdutos;
