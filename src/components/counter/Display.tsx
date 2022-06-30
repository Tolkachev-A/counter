import React from 'react';
import style from './display.module.css'
import {useAppSelector} from "../../redux/store";
import {StateType} from "./Counter";


export const Display: React.FC = (props) => {
    const {isSettings, valueCounter, maxValue, startValue, inCorrectValue} = useAppSelector<StateType>(state => ({
        isSettings: state.settingsCounterReducer.isSettings,
        valueCounter: state.counterReducer.valueCounter,
        maxValue: state.settingsCounterReducer.maxValue,
        startValue: state.settingsCounterReducer.startValue,
        inCorrectValue: state.settingsCounterReducer.inCorrectValue
    }))

    function styleDisplay() {
        if (isSettings) {
            return startValue >= maxValue ? `${style.red} ${style.normal}` : `${style.normal}`
        } else {
            return valueCounter >= maxValue ? `${style.red} ${style.normal}` : `${style.normal}`
        }
    }

    const valueTextIsSettings = inCorrectValue ? 'enter value and press \'set\'' : 'In correct value'

    return (
        <div className={styleDisplay()}>
            {isSettings
                ? valueTextIsSettings
                : <span className={style.textValueCounter}>
                    {valueCounter}
                </span>
            }
        </div>
    );
};

