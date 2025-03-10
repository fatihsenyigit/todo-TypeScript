
type AddFunc = (task:string) => Promise<void>;

interface ITodoType {
    task: string;
    isDone: boolean;
    id: string | number;
    todo?: string;
  }