import {applyMiddleware, combineReducers, compose, createStore, legacy_createStore} from "redux";
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

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware()))

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