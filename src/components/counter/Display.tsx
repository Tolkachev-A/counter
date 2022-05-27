import React from 'react';
import style from './display.module.css'

type DisplayPropsType = {
    valueCounter: number
    maxValue: number
    isSetings: boolean
    startValue: number
    inCorrectValue: boolean
}

export const Display: React.FC<DisplayPropsType> = (props) => {
    function styleDisplay() {
        if (props.isSetings) {
            return props.startValue >= props.maxValue ? `${style.red} ${style.normal}` : `${style.normal}`
        } else {
            return props.valueCounter >= props.maxValue ? `${style.red} ${style.normal}` : `${style.normal}`
        }
    }

    const vslueTextIsSetings = props.inCorrectValue ? 'enter value and press \'set\'' : 'In correct value'

    return (
        <div className={styleDisplay()}>
            {props.isSetings
                ? vslueTextIsSetings
                : <span className={style.textValueCounter}>
                    {props.valueCounter}
                </span>
            }
        </div>
    );
};

