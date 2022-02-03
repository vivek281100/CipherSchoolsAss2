import React from 'react';

const TodoList = (props) => {
    return (
    <div className='todo_Style'>
        <button type='text' onClick={() =>{
            props.onSelect(props.id);
        }}>X</button>
        <li> {props.text} </li>
    </div>);
};
export default TodoList;