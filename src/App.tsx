import React, {useEffect} from 'react';
import './App.css';
import {SettingsCounter} from "./components/settingsCounter/SettingsCounter";
import {Counter} from "./components/counter/Counter";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {setValueCounter} from "./redux/reduser/counterReducer";
import {setMaxValue, setStartValue, toggleSettings} from "./redux/reduser/settingsCounterReducer";

function App() {


    // const [startValue, setStartValue] = useState(0)
    // const [maxValue, setMaxValue] = useState(1)

    // const [isSettings, setIsSettings] = useState(false)

    const dispatch = useAppDispatch()
    const {valueCounter, startValue, maxValue, isSettings} = useAppSelector(state => ({
        valueCounter: state.counterReducer.valueCounter,
        startValue: state.settingsCounterReducer.startValue,
        maxValue: state.settingsCounterReducer.maxValue,
        isSettings: state.settingsCounterReducer.isSettings,
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


    const setSettings = () => {
        dispatch(setValueCounter(startValue))
        dispatch(toggleSettings(false))
    }

    const inCorrectValue = startValue < maxValue

    return (
        <div className='container '>
            <div className={'counter'}>
                <SettingsCounter setSettings={setSettings}
                                 isSettings={isSettings}
                                 inCorrectValue={inCorrectValue}
                />
            </div>
            <div className={'counter'}>
                <Counter setValueCounter={setValueCounter}
                         valueCounter={valueCounter}
                         maxValue={maxValue}
                         startValue={startValue}
                         isSettings={isSettings}
                         inCorrectValue={inCorrectValue}
                         dispatch={dispatch}/>

            </div>
        </div>
    );
}

export default App;
