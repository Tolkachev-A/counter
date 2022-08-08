import React from 'react';
import {Display} from './Display';
import {Button} from '../../common/button/Button';
import style from '../../common/button/button.module.css'
import {killingValueCounter, setValueCounter} from '../../redux/reduser/counterReducer/counterReducer';
import {useAppDispatch, useAppSelector} from '../../redux/store';


export type StateType = {
    isSettings: boolean
    valueCounter: number
    maxValue: number
    startValue: number
    inCorrectValue?: boolean
}

export const Counter: React.FC = (props) => {
    const dispatch = useAppDispatch()
    const {isSettings, valueCounter, maxValue, startValue} = useAppSelector<StateType>(state => ({
        isSettings: state.settingsCounterReducer.isSettings,
        valueCounter: state.counterReducer.valueCounter,
        maxValue: state.settingsCounterReducer.maxValue,
        startValue: state.settingsCounterReducer.startValue
    }))

    const incCallbackHandler = () => {
        dispatch(setValueCounter(valueCounter + 1))
    }
    const resetCallbackHandler = () => {
        dispatch(killingValueCounter(startValue))
    }
    const isButtonIncDisabled = isSettings || valueCounter >= maxValue
    const isButtonResetDisabled = isSettings || valueCounter === startValue
    return (
        <div>
            <Display/>
            <div className={style.btnBlock}>
                <Button name={'inc'}
                        callback={incCallbackHandler}
                        disabled={isButtonIncDisabled}/>
                <Button name={'reset'}
                        callback={resetCallbackHandler}
                        disabled={isButtonResetDisabled}/>
            </div>
        </div>
    );
};

