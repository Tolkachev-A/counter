import React, {useEffect, useState} from 'react';
import './App.css';
import {SetingsCounter} from "./components/setingsCounter/SetingsCounter";
import {Counter} from "./components/counter/Counter";

function App() {

    const [valueCounter, setValueCounter] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(1)
    const [isSetings, setIsSetings] = useState(false)


    useEffect(() => {
        let initialValue = localStorage.getItem('value')
        let initialStartValue = localStorage.getItem('startValue')
        let initialMaxValue = (localStorage.getItem('maxValue'))

        if (initialValue && initialStartValue && initialMaxValue) {
            setValueCounter(JSON.parse(initialValue))
            setStartValue(JSON.parse(initialStartValue))
            setMaxValue(JSON.parse(initialMaxValue))
        }

    }, [])


    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(valueCounter))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [valueCounter, startValue, maxValue])


    const setSetings = () => {
        setValueCounter(startValue)
        setIsSetings(false)
    }

    const inCorrectValue = startValue < maxValue

    return (
        <div className='container '>
            <div className={'setingsCounterBlock counter'}>
                <SetingsCounter setMaxValue={setMaxValue}
                                maxValue={maxValue}
                                startValue={startValue}
                                setStartValue={setStartValue}
                                setSetings={setSetings}
                                setIsSetings={setIsSetings}
                                isSetings={isSetings}
                                inCorrectValue={inCorrectValue}/>
            </div>
            <div className={'counterBlock counter'}>
                <Counter setValueCounter={setValueCounter}
                         valueCounter={valueCounter}
                         maxValue={maxValue}
                         startValue={startValue}
                         isSetings={isSetings}
                         inCorrectValue={inCorrectValue}/>

            </div>
        </div>
    );
}

export default App;
