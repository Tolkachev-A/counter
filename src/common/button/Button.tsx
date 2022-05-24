import React from 'react';
import style from './button.module.css'

type ButtonPropsType = {
    disabled: boolean
    name: string
    callback: () => void
}

export const Button: React.FC<ButtonPropsType> = ({disabled, name, callback}) => {

    return (
        <button onClick={ callback}
                disabled={disabled}
                className={style.btn}>
            {name}
        </button>
    );
};

