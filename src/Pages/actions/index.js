let nextId = 0
export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        text,
        id: nextId++
    }
}

export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const setVisibilityTodo = (filter) => {
    return {
        type: "SET_VISIBILITY_TODO",
        filter
    }
}