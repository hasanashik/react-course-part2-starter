import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }
const useTodos = () => {
    const fetchTodos = () =>
        axios
          .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
          .then((res) => res.data);
    return useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: fetchTodos,
        staleTime: 300 * 1000, //300 sec
      });
}

export default useTodos