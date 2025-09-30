import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";
import style from './Checkbox.module.css';

const Checkbox = ({ checked, className, defaultChecked, label }) => {
    const checkboxClasses = classNames(style['example-checkbox'], {
        [className]: className,
    });

    const [isChecked, setIsChecked] = React.useState(checked || defaultChecked);

    return (
        <label className={checkboxClasses}>
            <input className={ style['example-checkbox-input'] } onClick={ () => setIsChecked(!isChecked) } type="checkbox" />
            <span className={ style['example-checkbox-icon']}>
                { isChecked && <CheckIcon /> }
            </span>
            {label && <span className={ style['example-checkbox-label'] }>{label}</span> }
        </label>
    )
};

export default Checkbox;
