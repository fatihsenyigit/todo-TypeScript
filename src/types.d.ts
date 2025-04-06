


interface ITodoType {
    task: string;
    isDone: boolean;
    id: string | number;
    todo?: string;
  }


  type AddFunc = (task:string) => Promise<void>;
  type ToggleFunc = (todo: ITodoType) => Promise<void> 
  type DeleteFunc = (id: string | number) => Promise<void> 

  interface ITodoListFunc {
    deleteTodo: DeleteFunc;
    toggleTodo: ToggleFunc
  }