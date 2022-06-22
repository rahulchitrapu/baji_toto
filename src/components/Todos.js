import React from 'react'
import "./Todos.css"
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';

export const Todos = ({handleEditClick, editFormVisibility}) => {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos from the store
  const todos = useSelector((state)=>state.operationsReducer);
  return todos.map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
            {/* {editFormVisibility===false&&( */}
              <div><input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
              </div>
            {/* )} */}
            <h1 style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </h1>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&(
                <>
                  <span className='edit_icon' onClick={()=>handleEditClick(todo)}><Icon className='icon' icon={edit2}/></span>
                  <span className='delete_icon' onClick={()=>dispatch(removeTodo(todo.id))}><Icon className='icon' icon={trash}/></span>
                </>
              )}
        </div>
    </div>
  ))
}
