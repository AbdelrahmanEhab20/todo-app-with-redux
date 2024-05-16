import { useSelector } from "react-redux"
import SingleTodoItem from "./SingleTodoItem";

const TodoListItems = () => {
    const filteredTodos = useSelector(
        (state) => {
            const todos = state.todos;
            const filter = state.filter;
            const searchTerm = state.searchTerm;

            return todos.filter((todo) => {
                const matchFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed) || (filter === "ALL")

                const matchSearch = todo.text.toLowerCase().includes(searchTerm);

                return matchFilter && matchSearch;
            })
        }
    )
    return (
        <ul>
            <li className="my-2 text-sm font-bold underline">All Your Notes Here ⤵️⤵️</li>
            {filteredTodos.length > 0 ?
                filteredTodos.map((singleTodo, index) => <SingleTodoItem key={index} todo={singleTodo} index={index} />)
                : <div className="text-center font-bold text-red-600">There Are No TODOs In The list yet !</div>}
        </ul>
    )
}

export default TodoListItems 