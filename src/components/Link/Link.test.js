/**
 * @jest-environment jsdom
 */

import React from 'react';
import Link from './Link';
import { render, screen } from '@testing-library/react';

describe('Link component', () => {
    test('renders with default props', () => {
        render(<Link href="#">Click Me</Link>);
        const linkElement = screen.getByRole('link', { name: /click me/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveClass('example-link example-link__primary');
    });

    test('applies custom className', () => {
        render(<Link href="#" className="custom-class">Click Me</Link>);
        const linkElement = screen.getByRole('link', { name: /click me/i });
        expect(linkElement).toHaveClass('custom-class');
    });

    test.each(['primary', 'secondary', 'success', 'danger', 'warning'])('applies color classes - %s', (color) => {
        render(<Link href="#" color={ color }>Click Me</Link>);
        const linkElement = screen.getByRole('link', { name: /click me/i });
        expect(linkElement).toHaveClass(`example-link__${color}`);
    });

    test('adds rel attributes when target is _blank', () => {
        render(<Link href="https://www.example.com/" target="_blank">Click Me</Link>);
        const linkElement = screen.getByRole('link', { name: /click me/i });
        expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    });
});
