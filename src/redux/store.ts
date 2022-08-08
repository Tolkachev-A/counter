import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux';
import {counterReducer, KillingValueCounterType, SetValueCounterType} from './reduser/counterReducer/counterReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {
    initialStateSettingsCounterReducer,
    SetMaxValueType,
    SetStartValueType,
    settingsCounterReducer,
    ToggleSettingsType
} from './reduser/settingsCounterReducer/settingsCounterReducer';
import {loadStateMaxValue, loadStateStartValue, loadStateValueCounter, saveState} from '../utils/local-utils';


const rootReducer = combineReducers({
    counterReducer,
    settingsCounterReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const preloadedState = {
    counterReducer: {valueCounter: loadStateValueCounter()},
    settingsCounterReducer: {
        ...initialStateSettingsCounterReducer,
        maxValue: loadStateMaxValue(),
        startValue: loadStateStartValue()
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware()))


store.subscribe(() => {
    saveState({
        maxValue: store.getState().settingsCounterReducer.maxValue,
        startValue: store.getState().settingsCounterReducer.startValue,
        valueCounter: store.getState().counterReducer.valueCounter,
    });
});

export type ActionType =
    SetValueCounterType
    | KillingValueCounterType
    | SetStartValueType
    | SetMaxValueType
    | ToggleSettingsType

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector