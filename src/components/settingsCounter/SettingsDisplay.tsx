import React from 'react';
import {Input} from "../../common/input/Input";
import style from "../counter/display.module.css";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setMaxValue, setStartValue, toggleSettings} from "../../redux/reduser/settingsCounterReducer";


type SettingsDisplayPropsType = {
    inCorrectValue: boolean
}
export const SettingsDisplay: React.FC<SettingsDisplayPropsType> = (props) => {
    const dispatch = useAppDispatch()
    const {startValue, maxValue} = useAppSelector(state => ({
        maxValue: state.settingsCounterReducer.maxValue,
        startValue: state.settingsCounterReducer.startValue,
    }))

    const startValueHandler = (num: number) => {
        dispatch(setStartValue(num))
    }
    const maxValueHandler = (num: number) => {
        dispatch(setMaxValue(num))
    }
    const toggleSettingsHandler = () => {
        dispatch(toggleSettings(true))
    }

    const errorInput = !props.inCorrectValue ? style.errorInpyt : ''
    const styleDisplay = 0 > 4 ? `${style.red} ${style.normal}` : `${style.normal}`


    return (
        <div className={styleDisplay}>
            <Input value={startValue}
                   callback={startValueHandler}
                   title={'startValue'}
                   callbackOnFocus={toggleSettingsHandler}
                   className={errorInput}/>
            <Input value={maxValue}
                   callback={maxValueHandler}
                   title={'maxValue'}
                   callbackOnFocus={toggleSettingsHandler}
                   className={errorInput}/>
        </div>
    );
};

