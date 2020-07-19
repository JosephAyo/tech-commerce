import {
    combineReducers
} from 'redux'
import todos from './todos'
import setVisibility  from './visibilityTodos';

const todoApp = combineReducers({
    todos,
    setVisibility
})

export default todoApp