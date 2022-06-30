import {ActionType} from "../store";

export type initialStateType = typeof initialState

export type SetValueCounterType = {
    type: typeof SET_VALUE
    payload: number
}
export type KillingValueCounterType = {
    type: typeof KILLING_VALUE
    payload: number
}


const initialState = {
    valueCounter: 0
}

const SET_VALUE = 'SET_VALUE'
const KILLING_VALUE = 'KILLING_VALUE'

export const counterReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET_VALUE":
            return {...state, valueCounter: action.payload}
        case "KILLING_VALUE":
            return {...state, valueCounter: action.payload}
        default:
            return state
    }
}


export const setValueCounter = (payload: number): SetValueCounterType => ({type: SET_VALUE, payload})
export const killingValueCounter = (payload: number): KillingValueCounterType => ({type: KILLING_VALUE, payload})