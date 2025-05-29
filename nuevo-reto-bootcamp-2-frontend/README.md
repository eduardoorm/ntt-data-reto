# Random User App - Full Stack con NestJS y ReactJS para el reto ténico de NTT DATA

## 🧠 Tecnologías utilizadas

- **Backend**: NestJS + Axios
- **Frontend**: ReactJS (SPA) + CSS3
- **API externa**: https://randomuser.me

## 🔥 Mi experiencia con las tecnologías

Tengo experiencia desarrollando APIs con NestJS, usando módulos, servicios y controladores para organizar el código. Por el lado de React, me especializo en interfaces SPA optimizadas y adaptables a diferentes tamaños de pantalla.

## 🚀 Cómo iniciar

1. `cd backend && npm install && npm run start`
    El backend corre por defecto en http://localhost:3000.


2. `cd frontend && npm install && npm start`
    El frontend corre por defecto en 3001 en http://localhost:3001 


### 🌐 API externa
- [https://randomuser.me](https://randomuser.me): fuente de datos aleatorios de personas.


## ¿Que implementé?
###  Frontend (ReactJS)
- Configuración para que el frontend corra en el puerto 3001.

- Llamadas al backend usando fetch() para obtener los datos de usuarios.

- Estilos aplicados con App.css para mejorar la presentación.

- Componente principal que renderiza las tarjetas de usuario con la información solicitada.

### Backend (NestJS)
- Controlador /users que actúa como API REST para devolver los datos.

- Servicio que consume la API pública randomuser.me mediante Axios.

- Estructura clara y escalable basada en módulos y servicios de NestJS.


## Autor
Eduardo Ormeño 