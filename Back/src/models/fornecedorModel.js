import mongoose from "mongoose";

const fornecedorSchema = mongoose.Schema({
  nome: {
    type: String
  },
  cnpj: {
    type: Number
  },
  email: {
    type: String
  },
  telefone: {
    type: String
  },
  status: {
    type: String
  }
});

const Fornecedor = mongoose.model("Fornecedor", fornecedorSchema);

export default Fornecedor;
