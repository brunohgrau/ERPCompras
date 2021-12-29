import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { getAllCompras } from "../../api";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import Pagination from "./Pagination";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination
} from "react-table";

import { GlobalFilter } from "./GlobalFilter";

const TableProdutos = () => {
  // Initial Data for useQuery

  const data = [
    {
      nome: "A",
      qte: "null"
    }
  ];

  // Fetch Produtos

  const { data: compras, error, isLoading } = useQuery(
    "compras",
    getAllCompras,
    {
      initialData: data
    }
  );

  // React Table

  const columns = useMemo(
    () => [
      {
        Header: "Nome",
        accessor: "produto[nome]"
      },
      {
        Header: "QTE",
        accessor: "produto[qte]"
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data: compras,
      initialState: { pageSize: 5 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter } = state;

  return (
    <>
      <section className="container mx-auto px-4 sm:px-8 max-w-4xl">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message> {error.message} </Message>
        ) : (
          <>
            <h1 className="mt-24 text-4xl text-gray-600 font-semibold">
              Produtos
            </h1>

            <div className="flex py-3 space-x-4 mt-12">
              <div className="flex items-center justify-center  ">
                <GlobalFilter
                  filter={globalFilter}
                  setFilter={setGlobalFilter}
                />
              </div>
            </div>

            <div class="py-8">
              <table class="min-w-full leading-normal" {...getTableProps()}>
                <thead>
                  {
                    // Loop over the header rows
                    headerGroups.map((headerGroup) => (
                      // Apply the header row props
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                          // Loop over the headers in each row
                          headerGroup.headers.map((column) => (
                            // Apply the header cell props
                            <th
                              class="px-1 py-3 bg-gray-100 border-b border-gray-300 text-gray-800  text-left text-sm  font-semibold"
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}
                            >
                              {
                                // Render the header
                                column.render("Header")
                              }
                              <span>{column.isSortedDesc ? " 🔽" : " 🔼"}</span>
                            </th>
                          ))
                        }
                      </tr>
                    ))
                  }
                </thead>

                {isLoading ? (
                  <Loader />
                ) : (
                  <tbody {...getTableBodyProps()}>
                    {
                      // Loop over the table rows
                      page.map((row) => {
                        // Prepare the row for display
                        prepareRow(row);
                        return (
                          // Apply the row props
                          <tr {...row.getRowProps()}>
                            {
                              // Loop over the rows cells
                              row.cells?.map((cell) => {
                                // Apply the cell props
                                return (
                                  <td
                                    class="px-3 py-5 border-b border-gray-300 bg-white text-sm"
                                    {...cell.getCellProps()}
                                  >
                                    {
                                      // Render the cell contents
                                      <p class="text-gray-900 whitespace-no-wrap">
                                        {/* {console.log(cell.getCellProps())} */}
                                        {cell.render("Cell")}
                                      </p>
                                    }
                                  </td>
                                );
                              })
                            }
                          </tr>
                        );
                      })
                    }
                  </tbody>
                )}
              </table>
              <Pagination
                className="mt-10"
                previousPage={previousPage}
                nextPage={nextPage}
              />
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default TableProdutos;
