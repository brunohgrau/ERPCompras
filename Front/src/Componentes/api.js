import axios from "axios";

//  Abstract data fetching functions

/* Compras */

// getAllCompras

export const getAllCompras = async () => {
  const { data } = await axios.get(
    "https://mltzt.sse.codesandbox.io/api/compras"
    /* {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      }
    } */
  );
  return data;
};

// getCompraByKeyword

export const getCompraByKeyword = async ({ queryKey: [, keyword] }) => {
  const response = await fetch(
    `https://mltzt.sse.codesandbox.io/compras?keyword=${keyword}`,
    {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

// criarCompra

export const criarCompra = async (data) => {
  const response = await fetch(`https://mltzt.sse.codesandbox.io/api/compras`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

// updateCompra

export const updateCompra = async ({ id, ...data }) => {
  const response = await fetch(
    `https://mltzt.sse.codesandbox.io/api/compras/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    }
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

// getCompra

export const getCompra = async ({ queryKey }) => {
  const [key, { id }] = queryKey;
  const response = await fetch(
    `https://mltzt.sse.codesandbox.io/api/compras/${id}`,
    {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

//removerCompra

export const removeCompra = async (id) => {
  const response = await fetch(
    `https://mltzt.sse.codesandbox.io/api/compras/${id}`,
    {
      headers: { "Access-Control-Allow-Origin": "*" },
      method: "DELETE"
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};

/* Fornecedores  */

// getAllFornecedores

/* export const getAllFornecedores = async () => {
  const response = await fetch(
    "https://mltzt.sse.codesandbox.io/api/fornecedores",
    {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};
 */
export const getAllFornecedores = async () => {
  const { data } = await axios.get(
    "https://mltzt.sse.codesandbox.io/api/fornecedores",
    {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  );
  return data;
};

// criarFornecedor

export const criarFornecedor = async (data) => {
  const response = await fetch(
    `https://mltzt.sse.codesandbox.io/api/fornecedores`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

// getFornecedor

export const getFornecedor = async ({ queryKey }) => {
  const [key, { id }] = queryKey;
  const response = await fetch(
    `https://mltzt.sse.codesandbox.io/api/fornecedores/${id}`
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

// updateFornecedor

export const updateFornecedor = async ({ id, ...data }) => {
  const response = await fetch(
    `https://mltzt.sse.codesandbox.io/api/fornecedores/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

// removerFornecedor

export const removerFornecedor = async (id) => {
  const response = await fetch(
    `https://mltzt.sse.codesandbox.io/api/fornecedores/${id}`,
    {
      headers: { "Access-Control-Allow-Origin": "*" },
      method: "DELETE"
    }
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};
