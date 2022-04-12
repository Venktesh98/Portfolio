import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { items, onListClick, onItemClick } = props;
  //   console.log("Todolits:", items);
  const handleItemClick = (item, event) => {
    event.stopPropagation();
    // console.log("In handleClick", item, event);
    if (!item.done) {
      //   console.log("item Called:", item.text);
      onItemClick(item, event);
    }
  };

  return (
    <ul onClick={onListClick} style={{ background: "yellow" }}>
      {items.map((item, index) => {
        return (
          <TodoItem
            item={item}
            key={index}
            onClick={(event) => handleItemClick(item, event)}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
