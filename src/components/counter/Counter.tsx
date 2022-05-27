import React from 'react';
import {Display} from "./Display";
import {Button} from "../../common/button/Button";
import style from '../../common/button/button.module.css'

export type CounterPropsType = {
    valueCounter: number
    setValueCounter: (num: number) => void
    maxValue: number
    startValue: number
    isSetings: boolean
    inCorrectValue: boolean
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    return (
        <div>
            <Display valueCounter={props.valueCounter}
                     maxValue={props.maxValue}
                     isSetings={props.isSetings}
                     startValue={props.startValue}
                     inCorrectValue={props.inCorrectValue}/>
            <div className={style.btnBlock}>
                <Button name={'inc'}
                        callback={() => props.setValueCounter(props.valueCounter + 1)}
                        disabled={props.isSetings || props.valueCounter >= props.maxValue}/>
                <Button name={'reset'}
                        callback={() => props.setValueCounter(props.startValue)}
                        disabled={props.isSetings ||props.valueCounter === props.startValue}/>
            </div>
        </div>
    );
};

