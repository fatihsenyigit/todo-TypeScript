import { Grid, Typography } from "@mui/material";
import TodoListItem from "./TodoListItem";
import React from "react";

interface ITodoList {
  todos: ITodoType[];
}

/* 
3. yol  React.FC kullanimi, yani hem componentte bir tanimlama hemde proppa bir tanimlama yapiyoruz
*/

const TodoList: React.FC<ITodoList> = ({ todos }: ITodoList) => {
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
        md={6}
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "2px solid purple",
          borderRadius: "1rem",
        }}
      >
        <Typography>InProgress Todos</Typography>
        {progressTodos.length ? (
          progressTodos.map((todo) => <TodoListItem></TodoListItem>)
        ) : (
          <Typography color="error">No Progress todos...</Typography>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "2px solid green",
          borderRadius: "1rem",
        }}
      >
        <Typography>Completed Todos</Typography>
        {completedTodos.length ? (
          completedTodos.map((todo) => <TodoListItem></TodoListItem>)
        ) : (
          <Typography color="error">No Completed todos...</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
