import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importa esta línea para usar toBeInTheDocument
import SegundoComponent from 'layouts/authentication/components/CoverLayout/SegundoComponent';




describe('SegundoComponent', () => {
  test('renders component correctly', () => {
    render(<SegundoComponent />);

    // Assert that the component renders the title and description correctly
    expect(screen.getByText(/Conocenos/i)).toBeInTheDocument();
    expect(screen.getByText(/Nuestra misión es ser líderes en la prestación de servicios médicos/i)).toBeInTheDocument();

    // Assert that the first tab content is rendered correctly
    expect(screen.getByAltText(/medico3/i)).toBeInTheDocument();
    expect(screen.getByAltText(/medico4/i)).toBeInTheDocument();

    // Assert that the second tab content is not initially visible
    expect(screen.queryByAltText(/medico7/i)).not.toBeInTheDocument();
    expect(screen.queryByAltText(/medico8/i)).not.toBeInTheDocument();

    // Assert that the third tab content is not initially visible
    expect(screen.queryByAltText(/medico16/i)).not.toBeInTheDocument();
    expect(screen.queryByAltText(/medico9/i)).not.toBeInTheDocument();
  });

  test('changes tab content correctly when clicking on the navigation links', () => {
    render(<SegundoComponent />);

  });
});
