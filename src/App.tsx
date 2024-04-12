import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      <h1>React Starter Project</h1>

      {/* <PostList /> */}
      <TodoForm />
      <TodoList></TodoList>
    </>
  );
}

export default App;
