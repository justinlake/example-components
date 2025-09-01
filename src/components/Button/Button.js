import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Button.module.css';

/**
 * The `Button` component enables users to initiate actions or navigate within an application.
 * Its primary purpose is to act as an actionable trigger—such as submitting data, opening dialogs, or selecting choices.
 * It is not intended for navigational purposes—use the `Link` component instead.
 */

const Button = ({
    children,
    className,
    disabled = false,
    loading = false,
    onClick,
    size='medium',
    type='button',
    variant='primary',
}) => {
    const buttonClass = classNames(style['example-button'], {
        [style[`example-button__${variant}`]]: variant,
        [style[`example-button__${size}`]]: size,
        [style[`example-button__disabled`]]: disabled || loading,
        [className]: className,
    });

    return (
        <button
            aria-disabled={ disabled || loading }
            className={ buttonClass }
            onClick={ disabled ? undefined : onClick }
            type={ type }
        >
            { loading ? 'Loading...' : children }
        </button>
    );
};

Button.propTypes = {
    /**
     * The content of the button, typically just text.
     */
    children: PropTypes.node.isRequired,
    /** A custom class for additional styling. */
    className: PropTypes.string,
    /** Visually disables the button and sets `aria-disabled='true'` */
    disabled: PropTypes.bool,
    /** Visually disables the button and changes the text content to `Loading...` */
    loading: PropTypes.bool,
    /** Custom function triggered when clicking the button. */
    onClick: PropTypes.func,
    /** Sets how small/large the button displays */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Specifies what type of button to use. */
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    /**
     * The visual appearance of the button.
     * Changes the color based on desired action or validation state.
     * */
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning']),
};

export default Button;
