import React from 'react';
import style from "../counter/display.module.css";
import {Input} from "../../common/input/Input";
import {Button} from "../../common/button/Button";

type SetingsCounterPropsType = {
    startValue: number
    setStartValue: (num: number) => void
    maxValue: number
    setMaxValue: (num: number) => void
    setSetings: () => void
    isSetings:boolean
    setIsSetings:(isSetings:boolean)=>void

}
export const SetingsCounter: React.FC<SetingsCounterPropsType> = ({startValue, setStartValue, maxValue, setMaxValue, setSetings,setIsSetings,isSetings}) => {

    const styleDisplay = 0 > 4 ? `${style.red} ${style.normal}` : `${style.normal}`

    return (
        <div className={styleDisplay}>
            <Input value={startValue}
                   callback={setStartValue}
                   title={'startValue'}
                   callbackOnFocus={setIsSetings}/>
            <Input value={maxValue}
                   callback={setMaxValue}
                   title={'maxValue'}
                   callbackOnFocus={setIsSetings}/>
            <Button disabled={!isSetings}
                    name={'set'}
                    callback={setSetings}/>
        </div>
    );
};

