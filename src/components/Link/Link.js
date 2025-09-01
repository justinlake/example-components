import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Link.module.css';

/**
 * The `Link` component provides a consistent, accessible way to provide anchor elements with theme colors and typography styles.
 * Use this whenever your feature requires internal or external navigation.
 * For triggering actions within your app, using the `Button` component may be more appropriate.
 */

const Link = ({ children, className, color = 'primary', href, target }) => {
    const linkClass = classNames(style['example-link'], {
        [style[`example-link__${color}`]]: color,
        [className]: className,
    });

    return (
        <a
            className={ linkClass }
            href={ href }
            rel={ target === '_blank' ? 'noopener noreferrer' : undefined }
            target={ target }
        >
            { children }
        </a>
    );
};

Link.propTypes = {
    /**
     * The content of the link.
     * Typically just text, but can contain any React node(s).
     */
    children: PropTypes.node.isRequired,
    /** A custom class for additional styling. */
    className: PropTypes.string,
    /** The visual color of the link. */
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning']),
    /** The URL for the link to load. */
    href: PropTypes.string.isRequired,
    /**
     * The location/window where the link opens the URL.
     * When passed `_blank`, automatically adds `rel='noopener noreferrer'`
     */
    target: PropTypes.string,
};

export default Link;
