import React, {useEffect} from 'react';
import './App.css';
import {SettingsCounter} from './components/settingsCounter/SettingsCounter';
import {Counter} from './components/counter/Counter';
import {useAppSelector} from './redux/store';

type StateType = {
    valueCounter: number
    startValue: number
    maxValue: number
}

function App() {
    const {valueCounter, startValue, maxValue} = useAppSelector<StateType>(state => ({
        valueCounter: state.counterReducer.valueCounter,
        startValue: state.settingsCounterReducer.startValue,
        maxValue: state.settingsCounterReducer.maxValue,
    }))


    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(valueCounter))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [valueCounter, startValue, maxValue])


    return (
        <div className="container ">
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
