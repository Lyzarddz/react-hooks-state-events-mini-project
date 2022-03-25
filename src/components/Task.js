import React from "react";


function Task({ onDeleteTask, text, category}) {
  function handleClick(){
    onDeleteTask(text);
 
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete"
      onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
