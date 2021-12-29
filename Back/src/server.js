import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import asyncHandler from "express-async-handler";
import cors from "cors";

import Compras from "./models/compraModel.js";
import Fornecedores from "./models/fornecedorModel.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config({ path: "src/.env" });
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

/* Routes  */

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/users", userRoutes);

// @desc Fetch all products
// @route GET api/products
// @access Public

app.get(
  "/api/compras",
  asyncHandler(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const keyword = req.query.keyword
      ? {
          fornecedor: {
            $regex: req.query.keyword,
            $options: "i"
          }
        }
      : {};
    const compras = await Compras.find({ ...keyword });
    res.json(compras);
  })
);

// @desc Fetch single product
// @route GET api/products/:id
// @access Public

app.get(
  "/api/compras/:id",
  asyncHandler(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const compra = await Compras.findById(req.params.id);
    if (compra) {
      res.json(compra);
    } else {
      res.status(404);
      throw new Error("Compra not Found");
    }
  })
);

// @desc Auth User & Get Token
// @route POST api/users/login
// @access Public

app.post(
  "/api/compras",
  asyncHandler(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const {
      data,
      nf,
      fornecedor,
      vencimento,
      pagamento,
      valorTotal,
      produto
    } = req.body;

    const compra = new Compras({
      data: data,
      nf: nf,
      fornecedor: fornecedor,
      vencimento: vencimento,
      pagamento: pagamento,
      valorTotal: valorTotal,
      produto: produto
    });

    const createdCompra = await compra.save();
    res.status(201).json(createdCompra);
  })
);

// @desc    Delete compra
// @route   DELETE /api/compras/:id
// @access

app.delete(
  "/api/compras/:id",
  asyncHandler(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const compra = await Compras.findById(req.params.id);

    if (compra) {
      await compra.remove();
      res.json({ message: "Compra removed" });
    } else {
      res.status(404);
      throw new Error("Compra not found");
    }
  })
);

// @desc    Criar Compra
// @route   POST /api/compras
// @access

app.post(
  "/api/compras",
  asyncHandler(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const {
      data,
      nf,
      fornecedor,
      vencimento,
      pagamento,
      valorTotal,
      produto
    } = req.body;

    const compra = new Compras({
      data: data,
      nf: nf,
      fornecedor: fornecedor,
      vencimento: vencimento,
      pagamento: pagamento,
      valorTotal: valorTotal,
      produto: produto
    });

    const createdCompra = await compra.save();
    res.status(201).json(createdCompra);
  })
);

// @desc    Update Compra
// @route   PUT /api/compras/:id
// @access  Private/Admin

app.put(
  "/api/compras/:id",

  asyncHandler(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const {
      data,
      nf,
      fornecedor,
      vencimento,
      pagamento,
      valorTotal
    } = req.body;

    const compra = await Compras.findById(req.params.id);

    if (compra) {
      compra.data = data;
      compra.nf = nf;
      compra.fornecedor = fornecedor;
      compra.vencimento = vencimento;
      compra.pagamento = pagamento;
      compra.valorTotal = valorTotal;

      const updatedProduct = await compra.save();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

// @desc Fetch all fornecedores
// @route GET api/fornecedores
// @access Public

app.get(
  "/api/fornecedores",
  asyncHandler(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const fornecedores = await Fornecedores.find();
    res.json(fornecedores);
  })
);

// @desc Fetch all single fornecedor by id
// @route GET api/compras/:id
// @access Public

app.get(
  "/api/fornecedores/:id",
  asyncHandler(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const compra = await Fornecedores.findById(req.params.id);
    if (compra) {
      res.json(compra);
    } else {
      res.status(404);
      throw new Error("Fornecedor not Found");
    }
  })
);

// @desc    Delete fornecedor
// @route   DELETE /api/fornecedores/:id
// @access

app.delete(
  "/api/fornecedores/:id",
  asyncHandler(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const compra = await Fornecedores.findById(req.params.id);

    if (compra) {
      await compra.remove();
      res.json({ message: "Compra removed" });
    } else {
      res.status(404);
      throw new Error("Compra not found");
    }
  })
);

// @desc    Criar Fornecedor
// @route   POST /api/fornecedores
// @access

app.post(
  "/api/fornecedores",
  asyncHandler(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { nome, cnpj, email, telefone, status } = req.body;

    const fornecedor = new Fornecedores({
      nome: nome,
      cnpj: cnpj,
      email: email,
      telefone: telefone,
      status: status
    });

    const createdFornecedor = await fornecedor.save();
    res.status(201).json(createdFornecedor);
  })
);

// @desc    Update Fornecedor
// @route   PUT /api/fornecedor/:id
// @access  Private/Admin

app.put(
  "/api/fornecedores/:id",

  asyncHandler(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { nome, cnpj, email, telefone, status } = req.body;

    const fornecedor = await Fornecedores.findById(req.params.id);

    if (fornecedor) {
      fornecedor.nome = nome;
      fornecedor.cnpj = cnpj;
      fornecedor.email = email;
      fornecedor.telefone = telefone;
      fornecedor.status = status;

      const updatedFornecedor = await fornecedor.save();
      res.json(updatedFornecedor);
    } else {
      res.status(404);
      throw new Error("Fornecedor not Found");
    }
  })
);

/* Middleware  */

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
