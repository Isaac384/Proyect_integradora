import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactoOne from 'layouts/authentication/sign-in/ContactoOne';

// Mockear TypedJS para que no genere errores durante las pruebas
jest.mock('typed.js', () => {
  class TypedJS {
    constructor() {}
    destroy() {}
  }
  return TypedJS;
});

describe('ContactoOne Component', () => {
  test('Muestra el texto correctamente', () => {
    render(<C />);
    
    // Verificar que se muestra el título correctamente
    const tituloElement = screen.getByText('Brindamos atención médica excepcional');
    expect(tituloElement).toBeInTheDocument();

    // Verificar que se muestra el texto del TypedJS
    const typedTextElement = screen.getByText('con compasión');
    expect(typedTextElement).toBeInTheDocument();
  });

  test('Configura el TypedJS correctamente', () => {
    // Hacer mock de TypedJS para capturar su constructor y la función destroy
    const typedConstructorMock = jest.fn();
    const typedDestroyMock = jest.fn();
    jest.mock('typed.js', () => {
      class TypedJS {
        constructor() {
          typedConstructorMock();
        }
        destroy() {
          typedDestroyMock();
        }
      }
      return TypedJS;
    });

    render(<ContactoOne />);

    // Verificar que se llama al constructor de TypedJS al montar el componente
    expect(typedConstructorMock).toHaveBeenCalledTimes(1);

    // Verificar que la función destroy de TypedJS se llama al desmontar el componente
    expect(typedDestroyMock).toHaveBeenCalledTimes(1);
  });
});
