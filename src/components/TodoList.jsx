export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, i) => {
        return <li key={i}>{todo.text}</li>
      })}
    </ul>
  );
}