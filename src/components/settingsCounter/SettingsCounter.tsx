import React from 'react';
import {Button} from "../../common/button/Button";
import {SettingsDisplay} from "./SettingsDisplay";
import style from "../../common/button/button.module.css";

export type SettingsCounterPropsType = {
    setSettings: () => void
    isSettings: boolean
    inCorrectValue: boolean


}
export const SettingsCounter: React.FC<SettingsCounterPropsType> = (props) => {

    return (
        <div>
            <SettingsDisplay
                inCorrectValue={props.inCorrectValue}/>
            <div className={`${style.btnBlock} ${style.btnBlockSettings}`}>
                <Button disabled={!props.inCorrectValue || !props.isSettings}
                        name={'set'}
                        callback={props.setSettings}/>
            </div>
        </div>
    );
};

