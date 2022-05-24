import React from 'react';
import {Display} from "./Display";
import {Button} from "../../common/button/Button";

export type CounterPropsType = {
    valueСounter: number
    setValueСounter: (num: number) => void
    maxValue: number
    startValue: number
}

export const Counter: React.FC<CounterPropsType> = ({valueСounter, setValueСounter, maxValue, startValue}) => {
    return (
        <div className="counter">
            <Display value={valueСounter} maxValue={maxValue}/>
            <Button name={'inc'}
                    callback={() => setValueСounter(valueСounter + 1)}
                    disabled={valueСounter === maxValue}/>
            <Button name={'reset'}
                    callback={() => setValueСounter(startValue)}
                    disabled={valueСounter === startValue}/>
        </div>
    );
};

