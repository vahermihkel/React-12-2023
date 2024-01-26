import React from 'react';
import { render, screen } from '@testing-library/react';
import Ostukorv from './pages/Ostukorv';
import { BrowserRouter } from 'react-router-dom';

test('renders "Tühjenda" text when loads page', () => {
  render(
    <BrowserRouter>
      <Ostukorv />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Tühjenda/i);
  expect(linkElement).toBeInTheDocument();
});

