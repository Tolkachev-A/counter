import React from 'react';

export type InpytPropsType = {
    title: string
    value: number
    callback: (num: number) => void
    callbackOnFocus: (isSetings:boolean) => void
}
export const Input: React.FC<InpytPropsType> = ({title, value, callback, callbackOnFocus}) => {
    return (
        <label>
            <b>{title}: </b>
            <input value={value}
                   onChange={(e) => callback(+e.currentTarget.value)}
                   type='number'
                   onFocus={()=>callbackOnFocus(true)}
            />

        </label>);
};

