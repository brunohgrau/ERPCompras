import mongoose from "mongoose";

const compraSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  data: {
    type: String
  },
  nf: {
    type: String,

    unique: true
  },
  fornecedor: {
    type: String
  },
  vencimento: {
    type: String
  },
  pagamento: {
    type: String
  },
  valorTotal: {
    type: Number
  },
  produto: {
    nome: { type: String },
    qte: { type: Number }
  }
});

const Compra = mongoose.model("Compra", compraSchema);

export default Compra;
