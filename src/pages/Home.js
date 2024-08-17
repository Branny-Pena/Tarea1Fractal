import React from 'react';
import { ManejarUsuario } from '../components/Usuario/ManejarUsuario';
import { ClasificarProducto } from '../components/Producto/ClasificarProducto';

const Home = () => {
  const usuarioEjemplo = { nombre: "Juan", apellido: "Pérez", edad: 15 };
  const productoEjemplo = { nombre: "Laptop", categoria: "tecnología", precio: 50 };

  return (
    <div>
      <h1>Página Principal</h1>
      <ManejarUsuario usuario={usuarioEjemplo} />
      <ClasificarProducto producto={productoEjemplo} />
    </div>
  );
};

export default Home;
