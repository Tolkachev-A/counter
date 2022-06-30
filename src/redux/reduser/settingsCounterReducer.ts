import {ActionType} from "../store";

export type SetStartValueType = ReturnType<typeof setStartValue>
export type SetMaxValueType = ReturnType<typeof setMaxValue>
export type ToggleSettingsType = ReturnType<typeof toggleSettings>
export type InitialStateType = typeof initialState

const initialState = {
    startValue: 0,
    maxValue: 1,
    isSettings: false,
    inCorrectValue: true
}

export const settingsCounterReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET_START_VALUE":
            return {
                ...state,
                startValue: action.payload,
                inCorrectValue: action.payload < state.maxValue
            }
        case "SET_MAX_VALUE":
            return {
                ...state,
                maxValue: action.payload,
                inCorrectValue: state.startValue < action.payload
            }
        case "TOGGLE_SETTINGS_VALUE":
            return {
                ...state,
                isSettings: action.payload
            }
        case "SET_VALUE":
            return {
                ...state,
                isSettings: false
            }
        default:
            return state
    }
}

export const setStartValue = (payload: number) => ({type: 'SET_START_VALUE', payload} as const)
export const setMaxValue = (payload: number) => ({type: 'SET_MAX_VALUE', payload} as const)
export const toggleSettings = (payload: boolean) => ({type: 'TOGGLE_SETTINGS_VALUE', payload} as const)