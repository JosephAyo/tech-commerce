import React from 'react';
import PropTypes from 'prop-types';
import '../style/Todo.css';
import Todo from './Todo';

const TodoList = ({todos,onTodoClick}) =>{
    return (
        <div id="todo-list">
            <ul>
                {
                    todos.map(todo=>{
                        return(
                            <Todo
                                key={todo.id}
                                {...todo}
                                onClick={()=>onTodoClick(todo.id)}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList