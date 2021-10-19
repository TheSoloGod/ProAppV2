import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './rootReducers';
import appSaga from './rootSaga';
import logger from './logger';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(logger(rootReducers), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(appSaga);

export const getStore = () => {
    return store;
};

export default store;
