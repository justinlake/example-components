/**
 * @jest-environment jsdom
 */

import React from 'react';
import Alert from './Alert';
import { render, screen, fireEvent, within } from '@testing-library/react';

describe('Alert component', () => {
    test('renders with default props', () => {
        render(<Alert>This is an example Alert</Alert>);
        const alertElement = screen.getByRole('alert');
        expect(alertElement).toBeInTheDocument();
        expect(alertElement).toHaveClass('example-alert example-alert__info');
        expect(within(alertElement).getByRole('button', { name: /close/i })).toBeInTheDocument();
    });

    test('applies custom className', () => {
        render(<Alert className="custom-class">This is an example Alert</Alert>);
        const alertElement = screen.getByRole('alert');
        expect(alertElement).toHaveClass('custom-class');
    });

    test('does not render close button when closable is false', () => {
        render(<Alert closable={false}>This is an example Alert</Alert>);
        const alertElement = screen.getByRole('alert');
        expect(within(alertElement).queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
    });

    test.each(['info', 'success', 'warning', 'error'])('renders %s type', (type) => {
        render(<Alert type={ type }>This is an example Alert</Alert>);
        const alertElement = screen.getByRole('alert');
        expect(alertElement).toHaveClass(`example-alert example-alert__${type}`);
        const icon = screen.getByTestId(`${type}-icon`);
        expect(icon).toBeInTheDocument();
    });

    test('handles onClose event', () => {
        const handleClose = jest.fn();
        render(<Alert onClose={handleClose}>This is an example Alert</Alert>);
        const alertElement = screen.getByRole('alert');
        const closeButton = within(alertElement).getByRole('button', { name: /close/i });
        fireEvent.click(closeButton);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    test('does not trigger onClose event when not passed', () => {
        const handleClose = jest.fn();
        render(<Alert>This is an example Alert</Alert>);
        const alertElement = screen.getByRole('alert');
        const closeButton = within(alertElement).getByRole('button', { name: /close/i });
        fireEvent.click(closeButton);
        expect(handleClose).not.toHaveBeenCalled();
    });
});
