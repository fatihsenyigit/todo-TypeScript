import { Container } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import AddTodo from "../components/AddTodo";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
  todo?: string;
}

const url = "https://67cd5c91dd7651e464ee2794.mockapi.io/todos";

const Main = () => {
  // api dan gelen verilerle dolacagi icin
  // objeler icin veri tanimlama yaparken en iyi interface ve interface lerde best practice icin isim verilirken I ile baslanir.
  // const [todos, setTodos] = useState([] as ITodoType[]) birinci yol
  // const [todos, setTodos] = useState<Array<ITodoType>>([]) ikinci yol
  const [todos, setTodos] = useState<ITodoType[]>([]); //yaygin olan bu

  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos()
  }, [])
  

  return (
    <Container>
      <Header></Header>
      <AddTodo></AddTodo>
    </Container>
  );
};

export default Main;
