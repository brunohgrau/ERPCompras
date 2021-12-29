import React, { useMemo } from "react";
import { useQuery, useQueryClient, prefetchQuery } from "react-query";
import Button from "./Button";
import { getAllCompras } from "../../api";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import moment from "moment";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination
} from "react-table";
import TableCompras from "./TableCompras";

const ComprasLista = () => {
  // Fetch Compras

  const { data: compras, error, isLoading } = useQuery(
    "compras",
    getAllCompras
  );
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message> {error.message} </Message>
      ) : (
        <TableCompras data={compras} />
      )}
    </>
  );
};

export default ComprasLista;
