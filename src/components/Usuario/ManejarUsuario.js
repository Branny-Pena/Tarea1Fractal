import React from 'react';

export const ManejarUsuario = ({ usuario }) => {
  const manejarDatosUsuario = () => {
    const { nombre, apellido, edad } = usuario;

    if (!nombre || !apellido || nombre === "" || apellido === "") {
      return "Error: El nombre o apellido no pueden estar vacíos o no definidos.";
    }

    const usuarioCompleto = { ...usuario, completo: `${nombre} ${apellido}` };

    if (edad >= 18) {
      return `Usuario ${usuarioCompleto.completo} es mayor de edad.`;
    } else {
      return `Usuario ${usuarioCompleto.completo} es menor de edad.`;
    }
  };

  return (
    <button onClick={() => alert(manejarDatosUsuario())}>
      Verificar Usuario
    </button>
  );
};
