import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./components/Todo";
import './App.css';
export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}