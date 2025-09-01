/**
 * @jest-environment jsdom
 */

import React from 'react';
import Button from './Button';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button component', () => {
    test('renders with default props', () => {
        render(<Button>Click Me</Button>);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('example-button example-button__primary example-button__medium');
        expect(buttonElement).not.toBeDisabled();
    });

    test('applies custom className', () => {
        render(<Button className="custom-class">Click Me</Button>);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        expect(buttonElement).toHaveClass('custom-class');
    });

    test('handles onClick event', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('is disabled when disabled prop is true', () => {
        render(<Button disabled>Click Me</Button>);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        expect(buttonElement).toHaveAttribute('aria-disabled', 'true');
    });

    test('shows loading state when loading prop is true', () => {
        render(<Button loading>Click Me</Button>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveTextContent('Loading...');
        expect(buttonElement).toHaveAttribute('aria-disabled', 'true');
    });

    test.each(['small', 'medium', 'large'])('applies size class - %s', (size) => {
        render(<Button size={ size }>Click Me</Button>);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        expect(buttonElement).toHaveClass(`example-button__${size}`);
    });

    test.each(['primary', 'secondary', 'success', 'danger', 'warning'])('applies variant classes - %s', (variant) => {
        render(<Button variant={ variant }>Click Me</Button>);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        expect(buttonElement).toHaveClass(`example-button__${variant}`);
    });

    test('does not call onClick when disabled', () => {
        const handleClick = jest.fn();
        render(<Button disabled onClick={handleClick}>Click Me</Button>);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        fireEvent.click(buttonElement);
        expect(handleClick).not.toHaveBeenCalled();
    });
});
