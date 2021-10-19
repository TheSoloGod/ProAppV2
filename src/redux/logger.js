export default function logger (reducer) {
    return function(state, action) {
        console.group('action',action.type);
        console.log('prevState', state);
        console.log('playLoad', action.payload);
        const nextState = reducer(state, action);
        console.log('nextState', nextState);
        console.groupEnd();
        return nextState;
    }
}