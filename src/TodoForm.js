import React, { useState } from "react";

function TodoForm(props){

    const [text, setText] = useState("");

    function handleChange(event){
        let t = event.target.value;
        setText(t);
    }

    function addItem(event){
        event.preventDefault();
        if(text){
            props.onAddItem(text);
            setText("");
        }
    }


    return(
        <div>
            <h1>React to-do-list</h1>
            <form>
                <input onChange={handleChange} className="todo-input" type="text" value={text}></input>
                <button onClick={addItem} className="todo-button">Add</button>
            </form>
        </div> 
    )  
}

export default TodoForm