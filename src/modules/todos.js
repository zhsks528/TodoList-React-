import { Map, List } from 'immutable';
import { handleActions, createActions } from 'redux-actions';

//액션 생성
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

//액션 생성 함수 생성
export const insert = createActions('INSERT');
export const toggle = createActions('TOGGLE');
export const remove = createActions('REMOVE');

//리듀서 초기상태
const initialState = List([
    Map({
        id: 0,
        text : '리액트공부하기',
        done : true,
    }),
    Map({
        id: 1,
        text : '컴포넌트 스타일링 해보기',
        done : false,
    })
]);

//리듀서 생성
export default handleActions({
    [INSERT] : (state, action) => {
        const { id, text, done } = action.payload;

        return state.push(Map({
            id,
            text,
            done
        }));
    },
    [TOGGLE] : (state, action) => {
        const { payload : index } = action;
        return state.updateIn([index, 'done'], done=> !done);
        //state.setIn([index, 'done'], !state.getIn([0, index]))도 가능하다
    },
    [REMOVE] : (state, action) => {
        const { payload : index } = action;
        return state.delete(index);
    }
}, initialState)