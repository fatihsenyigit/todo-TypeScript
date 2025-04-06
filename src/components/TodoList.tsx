import { Grid, Typography } from "@mui/material";
import TodoListItem from "./TodoListItem";
import React from "react";
import "./style.css"

/* interface ITodoList {
  todos: ITodoType[]; 
  deleteTodo: DeleteFunc;
  toggleTodo: ToggleFunc    
} */

interface ITodoList extends ITodoListFunc {
  todos: ITodoType[];
}

/* 
3. yol  React.FC kullanimi, yani hem componentte bir tanimlama hemde proppa bir tanimlama yapiyoruz
*/

const TodoList: React.FC<ITodoList> = ({ todos, deleteTodo, toggleTodo }) => {
  const progressTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        mt: 1,
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-progress"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "2px solid purple",
          borderRadius: ".5rem",
        }}
      >
        <Typography
          className="title"
          color="secondary"
          align="center"
          variant="h4"
        >
          InProgress Todos
        </Typography>
        {progressTodos.length ? (
          progressTodos.map((todo) => (
            <TodoListItem
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              key={todo.id}
            ></TodoListItem>
          ))
        ) : (
          <Typography color="error" mt={3}>No Progress todos...</Typography>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-completed"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "2px solid green",
          borderRadius: ".5rem",
        }}
      >
        <Typography
          className="title"
          color="success"
          align="center"
          variant="h4"
        >
          Completed Todos
        </Typography>
        {completedTodos.length ? (
          completedTodos.map((todo) => (
            <TodoListItem
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              key={todo.id}
            ></TodoListItem>
          ))
        ) : (
          <Typography color="error">No Completed todos...</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
