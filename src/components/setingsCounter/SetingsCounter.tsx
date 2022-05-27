import React from 'react';
import {Button} from "../../common/button/Button";
import {SetingsDisplay} from "./SetingsDisplay";
import style from "../../common/button/button.module.css";

export type SetingsCounterPropsType = {
    startValue: number
    setStartValue: (num: number) => void
    maxValue: number
    setMaxValue: (num: number) => void
    setSetings: () => void
    isSetings: boolean
    setIsSetings: (isSetings: boolean) => void
    inCorrectValue: boolean

}
export const SetingsCounter: React.FC<SetingsCounterPropsType> = (props) => {

    return (
        <div>
            <SetingsDisplay setIsSetings={props.setIsSetings}
                            isSetings={props.isSetings}
                            setStartValue={props.setStartValue}
                            startValue={props.startValue}
                            maxValue={props.maxValue}
                            setMaxValue={props.setMaxValue}
                            inCorrectValue={props.inCorrectValue}/>
            <div className={`${style.btnBlock} ${style.btnBlockSetings}`}>
                <Button disabled={!props.inCorrectValue || !props.isSetings}
                        name={'set'}
                        callback={props.setSetings}/>
            </div>
        </div>
    );
};

