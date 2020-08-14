import {commentsReducer} from "./commentsReducer";
import { appReducer } from "./appReducer";
// import {appReducer} from "./appReducer";

export default function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers)
    const finalReducers = {}
    for (let i = 0; i < reducerKeys.length; i++) {
        const key = reducerKeys[i]

        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key]
        }
    }
    const finalReducerKeys = Object.keys(finalReducers)

    return function combination(state = {}, action) {

        let hasChanged = false
        const nextState = {}
        for (let i = 0; i < finalReducerKeys.length; i++) {
            const key = finalReducerKeys[i]
            // console.log('KEY: ', key)
            const reducer = finalReducers[key]
            const previousStateForKey = state[key]
            // console.log('previousStateForKey: ', previousStateForKey)
            const nextStateForKey = reducer(previousStateForKey, action)
            // console.log('nextStateForKey: ', nextStateForKey)
            nextState[key] = nextStateForKey
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey
        }
        // console.log('STATE2: ',state)
        // console.log('NSTATE: ',nextState)
        return hasChanged ? nextState : state
    }
}

export const rootReducer = combineReducers({
    comments: commentsReducer,
    app: appReducer,
})
