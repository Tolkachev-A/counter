import React from 'react';
import {Button} from '../../common/button/Button';
import {SettingsDisplay} from './SettingsDisplay';
import style from '../../common/button/button.module.css';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {setValueCounter} from '../../redux/reduser/counterReducer/counterReducer';

export type SettingsCounterPropsType = {}
type StateType = {
    inCorrectValue: boolean
    isSettings: boolean
    startValue: number
}
export const SettingsCounter: React.FC<SettingsCounterPropsType> = (props) => {

    let {inCorrectValue, isSettings, startValue} = useAppSelector<StateType>(state => ({
        inCorrectValue: state.settingsCounterReducer.inCorrectValue,
        isSettings: state.settingsCounterReducer.inCorrectValue,
        startValue: state.settingsCounterReducer.startValue
    }))
    const dispatch = useAppDispatch()

    const setSettings = () => {
        dispatch(setValueCounter(startValue))
    }

    return (
        <div>
            <SettingsDisplay/>
            <div className={`${style.btnBlock} ${style.btnBlockSettings}`}>
                <Button disabled={!inCorrectValue || !isSettings}
                        name={'set'}
                        callback={setSettings}/>
            </div>
        </div>
    );
};

