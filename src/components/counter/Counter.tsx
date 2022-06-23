import React from 'react';
import {Display} from "./Display";
import {Button} from "../../common/button/Button";
import style from '../../common/button/button.module.css'
import {killingValueCounter, setValueCounter} from "../../redux/reduser/counterReducer";
import {ActionType, useAppDispatch} from "../../redux/store";

export type CounterPropsType = {
    valueCounter: number
    setValueCounter: (num: number) => void
    maxValue: number
    startValue: number
    isSettings: boolean
    inCorrectValue: boolean
    dispatch:(action:ActionType)=>void

}

export const Counter: React.FC<CounterPropsType> = (props) => {
    return (
        <div>
            <Display valueCounter={props.valueCounter}
                     maxValue={props.maxValue}
                     isSetings={props.isSettings}
                     startValue={props.startValue}
                     inCorrectValue={props.inCorrectValue}/>
            <div className={style.btnBlock}>
                <Button name={'inc'}
                        callback={() => props.dispatch(setValueCounter(props.valueCounter + 1))}
                        disabled={props.isSettings || props.valueCounter >= props.maxValue}/>
                <Button name={'reset'}
                        callback={() => props.dispatch(killingValueCounter(props.startValue))}
                        disabled={props.isSettings ||props.valueCounter === props.startValue}/>
            </div>
        </div>
    );
};

