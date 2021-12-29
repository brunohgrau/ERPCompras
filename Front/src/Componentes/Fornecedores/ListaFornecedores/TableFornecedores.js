import React, { useMemo } from "react";
import { GlobalFilter } from "./GlobalFilter";
import ButtonCadastro from "./ButtonCadastro";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination
} from "react-table";

import ButtonAções from "./ButtonAções";
import Pagination from "./Pagination";

const TableFornecedores = ({ data }) => {
  // React Table

  const columns = useMemo(
    () => [
      {
        Header: "Nome",
        accessor: "nome"
      },
      {
        Header: "CNPJ",
        accessor: "cnpj"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Telefone",
        accessor: "telefone"
      },
      {
        Header: "Status",
        accessor: "status",

        Cell: (s) => (
          <span className="inset-0 px-2 bg-green-200 rounded-full">
            {s.value}
          </span>
        )
      },
      {
        accessor: "ações",
        Header: "Ações",
        Cell: ({ row: { original } }) => <ButtonAções id={original._id} />
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
      data: data,
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
        <h1 className="mt-24 text-4xl text-gray-600 font-semibold">
          Fornecedores
        </h1>

        <div className="flex py-3 space-x-4 mt-12">
          <ButtonCadastro />
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
          </table>

          <Pagination previousPage={previousPage} nextPage={nextPage} />
        </div>
      </section>
    </>
  );
};

export default TableFornecedores;
