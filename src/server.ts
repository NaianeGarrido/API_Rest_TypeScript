/**Sintaxe para importar bibliotecas ou outros arquivos */
import express from "express";
import "reflect-metadata";
import "./database";

/**instanciando a biblioteca do express*/
const app = express();

// http://localhost:3000
app.listen(3000, () => console.log("server is running"));
