import React from 'react';
import style from './display.module.css'

type DisplayPropsType = {
    value: number
    maxValue:number
}

export const Display: React.FC<DisplayPropsType> = ({value, maxValue}) => {
    const styleDisplay = value >= maxValue ? `${style.red} ${style.normal}` : `${style.normal}`
    return (
        <div className={styleDisplay}>
            {value}
        </div>
    );
};

