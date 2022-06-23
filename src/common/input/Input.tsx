import React from 'react';
import style from './input.module.css'

export type InpytPropsType = {
    title: string
    value: number
    className?: string
    callback: (num: number) => void
    callbackOnFocus: (isSettings: boolean) => void
}
export const Input: React.FC<InpytPropsType> = ({title, value, className, callback, callbackOnFocus}) => {
    const finalClassName = `  ${style.inpytStyle} ${className}`
    return (
        <label>
            <span>{title}: </span>
            <input value={value}
                   onChange={(e) => callback(+e.currentTarget.value)}
                   type='number'
                   onFocus={() => callbackOnFocus(true)}
                   className={finalClassName}
            />

        </label>);
};

