import express from "express";

const app = express();
//El render asiggna el puerto en la variable de entorno PORT 
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("HOLA SOY MANUEL");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});