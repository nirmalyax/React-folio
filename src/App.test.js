import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component without crashing', () => {
    render(<App />);
    const element = screen.getByText(/Get In Touch/i);
    expect(element).toBeInTheDocument();
});