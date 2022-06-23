import {combineReducers, createStore} from "redux";
import {counterReducer, KillingValueCounterType, setValueCounter, SetValueCounterType} from "./reduser/counterReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {
    SetMaxValueType,
    SetStartValueType,
    settingsCounterReducer,
    ToggleSettingsType
} from "./reduser/settingsCounterReducer";


const rootReducer = combineReducers({
    counterReducer,
    settingsCounterReducer
})

export const store = createStore(rootReducer)

export type ActionType =
    SetValueCounterType
    | KillingValueCounterType
    | SetStartValueType
    | SetMaxValueType
    | ToggleSettingsType

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector