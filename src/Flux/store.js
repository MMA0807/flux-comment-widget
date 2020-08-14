export function createStore(reducer, initialState) {
    let state = reducer(initialState, {type: '__INIT__'})
    const subscribers = []

    return {
        dispatch(action) {
            state = reducer(state, action)
            subscribers.forEach(sub => sub(state))
        },
        getState() {
            return state
        },
        subscribe(callback, rerender) {
            subscribers.push(callback)
            subscribers.push(rerender)
        }
    }
}