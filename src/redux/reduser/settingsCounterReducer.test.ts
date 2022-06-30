import {
    setMaxValue,
    setStartValue,
    settingsCounterReducer,
    InitialStateType,
    toggleSettings
} from "./settingsCounterReducer";

let settingsCounterValue = {} as InitialStateType
beforeEach(() => {
    settingsCounterValue = {
        startValue: 0,
        maxValue: 0,
        isSettings: false,
        inCorrectValue: true
    }
})

test('start value change', () => {

    const nweStartValue = settingsCounterReducer(settingsCounterValue, setStartValue(5))
    expect(nweStartValue.startValue).toBe(5)
    expect(settingsCounterValue.startValue).toBe(0)
})
test('max value change', () => {

    const nweStartValue = settingsCounterReducer(settingsCounterValue, setMaxValue(5))

    expect(nweStartValue.maxValue).toBe(5)
    expect(settingsCounterValue.maxValue).toBe(0)
})
test('toggle value settings', () => {

    const nweStartValue = settingsCounterReducer(settingsCounterValue, toggleSettings(true))

    expect(nweStartValue.isSettings).toBe(true)
    expect(settingsCounterValue.isSettings).toBe(false)
})
