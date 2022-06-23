import {ActionType} from "../store";

export type SetStartValueType = ReturnType<typeof setStartValue>
export type SetMaxValueType = ReturnType<typeof setMaxValue>
export type ToggleSettingsType = ReturnType<typeof toggleSettings>
export type SettingsCounterValueType = typeof settingsCounterValue

const settingsCounterValue = {
    startValue: 0,
    maxValue: 1,
    isSettings: false
}

export const settingsCounterReducer = (state = settingsCounterValue, action: ActionType): SettingsCounterValueType => {
    switch (action.type) {
        case "SET_START_VALUE":
            return {
                ...state,
                startValue: action.payload
            }
        case "SET_MAX_VALUE":
            return {
                ...state,
                maxValue: action.payload
            }
        case "TOGGLE_SETTINGS_VALUE":
            return {
                ...state,
                isSettings: action.payload
            }
        default:
            return state
    }
}

export const setStartValue = (payload: number) => ({type: 'SET_START_VALUE', payload} as const)
export const setMaxValue = (payload: number) => ({type: 'SET_MAX_VALUE', payload} as const)
export const toggleSettings = (payload: boolean) => ({type: 'TOGGLE_SETTINGS_VALUE', payload} as const)