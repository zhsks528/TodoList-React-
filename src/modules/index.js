import input from './input.js';
import todos from './todos.js';
import { combineReducers } from 'redux';


//리듀서를 하나로 합쳐주기
export default combineReducers({
    input,
    todos,
});