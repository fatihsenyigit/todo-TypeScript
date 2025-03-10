import { Container } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

/* interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
  todo?: string;
} */

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

  /* 1. yol otomatic olarak function void tanimlamasi alir
  const addTodo = async(task:string) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
  } */

    // 2. yol fonksiyon icin type tanimlamasi yapilir ilk once
    // type AddFunc = (task:string) => Promise<void>;

    // 3. yol burada yaptigimiz gibi global dan almak

    const addTodo: AddFunc = async(task) => {
        try {
            await axios.post(url, {task, isDone:false})
            getTodos()
        } catch (error) {
            console.log(error)
        }
    }
    

  useEffect(() => {
    getTodos()
  }, [])
  

  return (
    <Container>
      <Header></Header>
      <AddTodo addTodo={addTodo}></AddTodo>
      <TodoList todos={todos}></TodoList>
    </Container>
  );
};

export default Main;
