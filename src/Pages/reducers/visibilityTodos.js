
export const setVisibility = (state = "SHOW_ALL" ,action) =>{
    switch (action.type) {
        case "SET_VISIBILITY_TODO":
                return  action.filter
        default:
            return state
    }
}

export default setVisibility