import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importa esta línea para usar toBeInTheDocument
import HeaderOne from 'layouts/authentication/sign-in/HeaderOne';


// Mockear las funciones y módulos que se utilicen en el componente
jest.mock('axios');
jest.mock('react-secure-storage');

describe('HeaderOne Component', () => {
  test('Muestra el logotipo correctamente', () => {
    render(<HeaderOne />);

    // Verificar que se muestra el logotipo
    const logoElement = screen.getByAltText('Hospital Logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('Muestra el título y subtítulo correctamente', () => {
    render(<HeaderOne />);

    // Verificar que se muestra el título "Hospital"
    const titleElement = screen.getByText('Hospital');
    expect(titleElement).toBeInTheDocument();

    // Verificar que se muestra el subtítulo "Hospital Esperanza y Vida."
    const subtitleElement = screen.getByText('Hospital Esperanza y Vida.');
    expect(subtitleElement).toBeInTheDocument();
  });
});