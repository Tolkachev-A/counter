import {counterReducer, initialStateType, killingValueCounter, setValueCounter} from './counterReducer';


let countState = {} as initialStateType
beforeEach(() => {
    countState = {
        valueCounter: 0
    }
})

test('increase counter value', () => {
    const newCountState = counterReducer(countState, setValueCounter(2))

    expect(newCountState.valueCounter).toBe(2)
})

test('killings counter value', () => {
    countState = {
        valueCounter: 2
    }
    const newCountState = counterReducer(countState, killingValueCounter(1))

    expect(newCountState.valueCounter).toBe(1)
})

