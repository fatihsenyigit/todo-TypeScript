import { DeleteOutline } from "@mui/icons-material"
import { IconButton, ListItem, ListItemText } from "@mui/material"
import React from "react";

/* interface ITodoListItem {
  todo: ITodoType;
  deleteTodo: DeleteFunc;
  toggleTodo: ToggleFunc
} */

interface ITodoListItem extends ITodoListFunc {
  todo: ITodoType;
}


const TodoListItem:React.FC<ITodoListItem> = ({todo, deleteTodo, toggleTodo}) => {
  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment">
          <DeleteOutline onClick={()=>deleteTodo(todo.id)}></DeleteOutline>
        </IconButton>
      }
    >
      <ListItemText primary={todo.task} onClick={()=>toggleTodo(todo)} />
    </ListItem>
  )
}

export default TodoListItem