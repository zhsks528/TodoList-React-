import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

//액션
const SET_INPUT = 'input/SET_INPUT';

//액션 생성함수
export const setInput = createAction(SET_INPUT);

//리듀서의 초기상태
const initialState = Map({
    value: ''
});

//리듀서 생성
export default handleActions({
    [SET_INPUT]: (state, action)=>{
        return state.set('value', action.payload)
    }
}, initialState);