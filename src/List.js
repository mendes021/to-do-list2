import React from "react";

function List(props){


    return(
        <ul className="todo-list">
            {props.items.map(
                item =>
                    <li key={item.id} className="todo-item">
                        {item.text}
                        <button onClick={()=>{props.onItemDeleted(item)}}>done</button>
                    </li>
            )}
        </ul>
    )
}

export default List;