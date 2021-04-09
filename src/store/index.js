import { createStore, applyMiddleware, combineReducers } from 'redux';

import counterreducers from './reducers/reducers';
import user from './reducers/user';

import thunk from "redux-thunk";

const rootReducer=combineReducers({
    counterreducers,
    user
})

// const store = createStore(rootReducer);

// 报错原因：Actions must be plain objects. Use custom middleware for async actions
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

/**
 * 1. store 存放数据的仓库
 * 2. state 数据的仓库 当中存储的数据
 * 3. action 对象
 * 4. dispatch 唯一修改store中的数据
 * 5. reduer 函数
 */