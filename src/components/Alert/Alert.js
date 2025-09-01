import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CheckCircleIcon } from "@phosphor-icons/react/dist/csr/CheckCircle";
import { InfoIcon } from "@phosphor-icons/react/dist/csr/Info";
import { WarningIcon } from "@phosphor-icons/react/dist/csr/Warning";
import { WarningOctagonIcon } from "@phosphor-icons/react/dist/csr/WarningOctagon";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import style from './Alert.module.css';

/**
 * The `Alert` component serves as a versatile notification banner used to communicate important messages, notifications, or feedback to users.
 * Its purpose is to draw attention to specific information—such as errors, warnings, or success messages—in a clear and consistent manner across an application.
 */

const Alert = ({ children, className, closable = true, onClose, type = 'info', variant }) => {
    const alertClass = classNames(style['example-alert'], {
        [style[`example-alert__${type}`]]: type,
        [style[`example-alert__${variant}`]]: variant,
        [className]: className,
    });

    const [closed, setClosed] = React.useState(false);
    
    const handleOnClose = (e) => {
        setClosed(true);
        if (onClose) {
            onClose(e);
        }
    };

    if (closed) {
        return null;
    }

    const AlertIcon = (props) => (
        <React.Fragment>
            {type === 'info' && <InfoIcon { ...props } />}
            {type === 'success' && <CheckCircleIcon { ...props } />}
            {type === 'warning' && <WarningIcon { ...props } />}
            {type === 'error' && <WarningOctagonIcon  { ...props } />}
        </React.Fragment>
    );

    return (
        <div className={ alertClass } role='alert'>
            <div className={ style['example-alert-icon'] }>
                <AlertIcon data-testid={ `${type}-icon` } size={ 32 }/>
            </div>
            <div className={ style['example-alert-message'] }>
                { children }
            </div>
            { closable && (
                <div className={ style['example-alert-actions'] }>
                    <button
                        aria-label='Close'
                        className={ style['example-alert-close'] }
                        onClick={ handleOnClose }
                        type='button'
                    >
                        <XIcon size={24} />
                    </button>
                </div>
            ) }
        </div>
    );
};

Alert.propTypes = {
    /**
     * The content of the alert.
     * Typically just text, but can contain any React node(s).
     */
    children: PropTypes.node.isRequired,
    /** A custom class for additional styling. */
    className: PropTypes.string,
    /** Determines if the alert can be closed. */
    closable: PropTypes.bool,
    /** Custom function triggered when closing the alert. */
    onClose: PropTypes.func,
    /**
     * The type / severity of the alert.
     * Changes the color and icon.
     */
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    /**
     * The visual appearance of the alert.
     * Changes how assertive / polite the alert appears.
     * */
    variant: PropTypes.oneOf(['filled', 'outlined']),
};

export default Alert;
