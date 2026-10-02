# Manuel API

API REST sencilla creada con Node.js y Express que ofrece endpoints para consultar usuarios y productos, y sirve una página HTML que consume esos datos.

## Descripción

Este proyecto es parte de mi práctica con Node.js. La API devuelve datos en formato JSON y la página web (`public/index.html`) usa `fetch()` para mostrar automáticamente los usuarios y productos, además de permitir agregar usuarios nuevos.

## Tecnologías utilizadas

- Node.js
- Express
- HTML, CSS y JavaScript (fetch)
- Git y GitHub
- Render (despliegue)
- Postman (pruebas de endpoints)

## Cómo ejecutar el proyecto localmente

1. Clonar el repositorio:
```bash
   git clone https://github.com/Manuel-herocarentable/Manuel-API.git
   cd Manuel-API
```
2. Instalar las dependencias:
```bash
   npm install
```
3. Iniciar el servidor:
```bash
   node index.js
```
4. Abrir en el navegador: `http://localhost:3000/`

## Endpoints

| Método | Ruta | Descripción | Respuesta |
|---|---|---|---|
| GET | `/` | Página HTML del proyecto | 200 |
| GET | `/saludo` | Mensaje de saludo en JSON | 200 |
| GET | `/usuarios` | Lista de todos los usuarios | 200 |
| GET | `/usuarios/:id` | Busca un usuario por id | 200 / 404 si no existe |
| POST | `/usuarios` | Crea un usuario nuevo (`{ "nombre": "Carlos" }`) | 201 |
| GET | `/productos` | Lista de productos | 200 |

## URL en Render

https://TU-URL-REAL.onrender.com/

- https://TU-URL-REAL.onrender.com/usuarios
- https://TU-URL-REAL.onrender.com/productos

## Qué se realizó

- Se instaló Postman y se probaron los endpoints, revisando los códigos de respuesta (200, 201 y 404).
- Se creó el endpoint `GET /usuarios` y `GET /usuarios/:id`, que devuelve 404 con un mensaje si el usuario no existe.
- Se creó una carpeta `public` con un `index.html` con diseño en CSS, servido por Express.
- Se conectó el HTML con la API usando `fetch()`, de modo que usuarios y productos se cargan automáticamente.
- Se creó el endpoint `GET /productos` y se muestra en la página.
- Se subió el código a GitHub y se desplegó en Render.

## Nota

Los usuarios agregados con POST se guardan solo en la memoria del servidor; al reiniciarse, se pierden.

## Autor

Manuel Horecarentable