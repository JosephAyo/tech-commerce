import undoable from 'redux-undo';


const todo = (
    state,
    action
) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                id: action.id,
                    text: action.text,
                    completed: false
            }

            case "TOGGLE_TODO":
                if (state.id !== action.id) {
                    return state
                }
                return {
                    ...state,
                    completed: !state.completed
                }

                case "DELETE_TODO":
                    return state.filter(tod => tod.id !== action.id)

                default:
                    return state
    }
}

const todos = (
    state = [],
    action
) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                todo(undefined, action)
            ]

        case "TOGGLE_TODO":
            return state.map(tods => {
                return todo(tods, action)
            })

        case "DELETE_TODO":
            return todo(state, action)

        default:
            return state
    }
}

const undoableTodos = undoable(todos)

export default undoableTodos;