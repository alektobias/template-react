import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import RootReducer from './modules/rootReducer';
import RootSaga from './modules/rootSaga';

const persistConfig = {
	key: 'YOUR_SECRET_KEY',
	storage,
	whitelist: [],
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	persistReducer(persistConfig, RootReducer),
	applyMiddleware(sagaMiddleware)
);

const persistor = persistStore(store);
sagaMiddleware.run(RootSaga);

export { store, persistor };
