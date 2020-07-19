import {
    connect
} from 'react-redux';
import TodoList from '../Components/TodoList';
import {
    toggleTodo
} from '../actions/index';

//this gets todos based on the filter
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos
        case "SHOW_COMPLETED":
            return todos.filter(todo => todo.completed)
        case "SHOW_UNCOMPLETED":
            return todos.filter(todo => !todo.completed)
        default:
            return todos
    }
    return todos
}

//maps the state (i.e. todos) return by the getVisibleTodos  
//function to the TodoList component
const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos.present,state.setVisibility)
})

const mapDispatchToProps = ({
    onTodoClick: toggleTodo
})

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList