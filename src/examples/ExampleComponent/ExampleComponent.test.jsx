import { render, screen } from '@testing-library/react';
import React from 'react';

import TestComponent from './ExampleComponent';

test('Test-TestComponent', () => {
    render(<TestComponent label='This is a text' />)
    const testSelectElement = screen.getByText(/This is a text/i)
    expect(testSelectElement).toBeInTheDocument()
})
