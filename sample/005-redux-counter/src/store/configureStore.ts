import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

// tslint:disable-next-line:no-any
const composeEnhancer: typeof compose = (window as any)
    .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({
    collapsed: true
});

const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancer(
            applyMiddleware(
                sagaMiddleware,
                logger,
                routerMiddleware(history),
            ),
        ),
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;