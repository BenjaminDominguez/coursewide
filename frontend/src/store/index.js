import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from '../reducers';
import { createFilter } from 'redux-persist-transform-filter';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = { };

//Using thunk and apiMiddleWare (Login/Auth)
const middleware = [apiMiddleware, thunk];

//Which elements of our store should persist?
const persistedFilter = createFilter(
    'auth', ['access', 'refresh']
)

const reducer = persistReducer(
    {
        key: 'root',
        storage: storage,
        whitelist: ['auth'],
        transforms: [persistedFilter]
    },
    rootReducer
)


export const store = createStore(
    reducer,
    initialState,
    compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )   

persistStore(store);

export default store;