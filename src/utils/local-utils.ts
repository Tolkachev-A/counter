import {RootState} from '../redux/store';

export const loadStateValueCounter = () => {
    try {
        const serializedState = localStorage.getItem('valueCounter');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
export const loadStateMaxValue = () => {
    try {
        const serializedState = localStorage.getItem('maxValue');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
export const loadStateStartValue = () => {
    try {
        const serializedState = localStorage.getItem('startValue');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: {
    maxValue: number,
    startValue: number,
    valueCounter: number,
}) => {
    try {
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue));
        localStorage.setItem('startValue', JSON.stringify(state.startValue));
        localStorage.setItem('valueCounter', JSON.stringify(state.valueCounter));
    } catch {
        throw new Error('Error save to Local Storage');
    }
};

