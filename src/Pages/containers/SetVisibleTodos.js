import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityTodo } from '../actions';

let setFilter = ({dispatch})=>{
    const handleFilter = (filter)=>{
        dispatch(setVisibilityTodo(filter))
    }
    return(
        <div style={{marginTop:"6rem"}}>
            <p onClick={()=>handleFilter("SHOW_ALL")}>
                SHOW ALL
            </p>
            <p onClick={()=>handleFilter("SHOW_COMPLETED")}>
                SHOW COMPLETED
            </p>
            <p onClick={()=>handleFilter("SHOW_UNCOMPLETED")}>
                SHOW UNCOMPLETED
            </p>
        </div>
    )
}

setFilter = connect()(setFilter)

export default setFilter