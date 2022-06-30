import React, {useEffect} from 'react';
import './App.css';
import {SettingsCounter} from "./components/settingsCounter/SettingsCounter";
import {Counter} from "./components/counter/Counter";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {setValueCounter} from "./redux/reduser/counterReducer";
import {setMaxValue, setStartValue} from "./redux/reduser/settingsCounterReducer";

type StateType = {
    valueCounter: number
    startValue: number
    maxValue: number
}

function App() {
    const dispatch = useAppDispatch()
    const {valueCounter, startValue, maxValue} = useAppSelector<StateType>(state => ({
        valueCounter: state.counterReducer.valueCounter,
        startValue: state.settingsCounterReducer.startValue,
        maxValue: state.settingsCounterReducer.maxValue,
    }))


    useEffect(() => {
        let initialValue = localStorage.getItem('value')
        let initialStartValue = localStorage.getItem('startValue')
        let initialMaxValue = (localStorage.getItem('maxValue'))

        if (initialValue && initialStartValue && initialMaxValue) {
            dispatch(setValueCounter(JSON.parse(initialValue)))
            dispatch(setStartValue(JSON.parse(initialStartValue)))
            dispatch(setMaxValue(JSON.parse(initialMaxValue)))
        }

    }, [])


    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(valueCounter))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [valueCounter, startValue, maxValue])


    return (
        <div className='container '>
            <div className={'counter'}>
                <SettingsCounter/>
            </div>
            <div className={'counter'}>
                <Counter/>

            </div>
        </div>
    );
}

export default App;
