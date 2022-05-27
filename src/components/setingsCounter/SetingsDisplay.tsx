import React from 'react';
import {Input} from "../../common/input/Input";
import style from "../counter/display.module.css";


type SetingsDisplayPropsType={
    startValue:number
    setStartValue: (num: number) => void
    maxValue: number
    setMaxValue: (num: number) => void
    isSetings:boolean
    setIsSetings:(isSetings:boolean)=>void
    inCorrectValue:boolean
}
export const SetingsDisplay: React.FC<SetingsDisplayPropsType> = (props) => {
    const errorInput= !props.inCorrectValue ? style.errorInpyt : ''
    const styleDisplay = 0 > 4 ? `${style.red} ${style.normal}` : `${style.normal}`
    return (
        <div  className={styleDisplay}>
            <Input value={props.startValue}
                   callback={props.setStartValue}
                   title={'startValue'}
                   callbackOnFocus={props.setIsSetings}
                   className={ errorInput}/>
            <Input value={props.maxValue}
                   callback={props.setMaxValue}
                   title={'maxValue'}
                   callbackOnFocus={props.setIsSetings}
                   className={ errorInput}/>
        </div>
    );
};

