import React from 'react';
import PropTypes from 'prop-types';
import '../style/Todo.css';

//this may not work because of the placement of onClick but
// I'm just checking
const Todo = ({completed,text,onClick}) =>{
    return(
        <li onClick={()=>onClick()} style={{color:(completed?"green":"red")}}>
            {text}
        </li>
    )
}


Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Todo