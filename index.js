import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
// Render asigna el puerto en la variable de entorno PORT
const PORT = process.env.PORT || 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Permite leer JSON en el body (debe ir antes de las rutas)
app.use(express.json());

// Sirve los archivos de la carpeta public (index.html en "/")
app.use(express.static(path.join(__dirname, "public")));

// Datos de ejemplo
const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Maria" },
  { id: 3, nombre: "Pedro" },
];

app.get("/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde la API de Manuel" });
});

// Listar todos los usuarios
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

// Buscar un usuario por id
app.get("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }

  res.json(usuario);
});

// Crear un usuario
app.post("/usuarios", (req, res) => {
  const { nombre } = req.body;
  const nuevo = { id: usuarios.length + 1, nombre };
  usuarios.push(nuevo);
  res.status(201).json(nuevo);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});