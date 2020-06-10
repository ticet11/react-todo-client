import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import TodoItem from "./components/TodoItem";
import "./styles/main.css";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            todo: "",
            todos: [],
        };
    }

    addTodoItem = (event) => {
        event.preventDefault();
        axios({
            method: "post",
            url: "http://localhost:5000/todo",
            headers: { "content-type": "application/json" },
            data: {
              title: this.state.todo,
              done: false
            }
        }).then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log('AddTodo error', error)
        })
    };

    handleChange = (event) => {
        this.setState({
            todo: event.target.value,
        });
    };

    componentDidMount = () => {
        fetch("http://localhost:5000/todos")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    todos: data,
                });
            })
            .catch((error) => {
                console.error("todos fetch error", error);
            });
    };

    renderTodos = () => {
        return this.state.todos.map((todo) => {
            return <TodoItem key={todo.id} todoData={todo} />;
        });
    };

    render() {
        return (
            <div className="app">
                <h1>To-Do Wizard</h1>
                <form
                    className="add-todo"
                    onSubmit={this.addTodoItem}
                >
                    <input
                        type="text"
                        placeholder="Add Item"
                        onChange={this.handleChange}
                        value={this.state.todo}
                    />
                    <button type="submit">Cast</button>
                </form>
                {this.renderTodos()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
