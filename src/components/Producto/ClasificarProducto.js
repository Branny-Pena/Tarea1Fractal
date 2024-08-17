import React from 'react';

export const ClasificarProducto = ({ producto }) => {
  const clasificarProducto = () => {
    const { nombre, categoria, precio } = producto;

    if (!nombre || !categoria || nombre === "" || categoria === "") {
      return "Error: El nombre o la categoría no pueden estar vacíos o no definidos.";
    }

    const productoConDescuento = precio > 100 ? { ...producto, descuento: true } : producto;

    let mensajeCategoria = '';
    switch (categoria) {
      case "alimentos":
        mensajeCategoria = `El producto ${nombre} es un alimento.`;
        break;
      case "ropa":
        mensajeCategoria = `El producto ${nombre} es una prenda de ropa.`;
        break;
      case "tecnología":
        mensajeCategoria = `El producto ${nombre} es un dispositivo tecnológico.`;
        break;
      default:
        mensajeCategoria = `Categoría ${categoria} no está definida.`;
        break;
    }

    return !productoConDescuento.descuento? mensajeCategoria + ` Precio: $${precio}.` + '\nEl producto no cuenta con descuento': mensajeCategoria + ` Precio: $${precio}` + 'El producto cuenta con descuento' ;
  };

  return (
    <button onClick={() => alert(clasificarProducto())}>
      Clasificar Producto
    </button>
  );
};
