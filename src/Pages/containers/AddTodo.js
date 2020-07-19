import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({dispatch})=>{
    const [inputState,setInputState] = React.useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!inputState.trim()){
            alert('nothing')
            return
        }
        dispatch(addTodo(inputState));
        setInputState("")
    }
    return(
        <div style={{marginTop:"6rem"}}>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input placeholder="enter todo" name="todo" type="text"
                    onChange={(e)=>setInputState(e.target.value)}
                    value={inputState}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo