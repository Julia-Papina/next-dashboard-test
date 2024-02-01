import TodoItem from "@/app/ui/todo/todo-item"

export default function TodoList ({ todos, toggleTodoCompleted, removeTodo }) {
    return (
        <ul>
           { 
           todos.map(todo => <TodoItem key={todo.id} {...todo} toggleTodoCompleted={toggleTodoCompleted} removeTodo={removeTodo}/>) 
           } 

        </ul>
    )

}