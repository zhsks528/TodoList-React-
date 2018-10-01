import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return this.props.done !== nextProps.done;
  }
  render() {
    const { done, children, onToggle, onRemove } = this.props;
    /* 앞 코드에서는 비구조화 할당을 이용하여 this.props 안에 있는
        done, children, onToggle, onRemove 레퍼런스를 만들어 주었습니다.
    */
   /* done = 해당 일정을 완료했는지 완료하지 않았는지  여부확인
      children = 일정 정보 내용을 나타냄 
      onToggle = 일정 완료 상태를 껏다 켰다 하는 함수
      onRemove = 해당 일정을 제거하는 함수
   */ 
    return (
      <div className= {cx('todo-item')} onClick= {onToggle}>
        <input className= {cx('tick')} type= "checkbox" checked= {done} readOnly/>
        <div className= {cx('text', {done})}>{children}</div>
        <div className= {cx('delete')} onClick= {(e)=>{
          onRemove(); 
          e.stopPropagation();
          }
        }>[지우기]</div>
      </div>
    ); 
  }
}

export default TodoItem;