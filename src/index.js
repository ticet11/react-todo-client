import React from "react";
import ReactDOM from "react-dom";

import './styles/main.css'

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            todo: "",
        };
    }

    addTodoItem = (event) => {
      event.preventDefault()
      console.log(this.state, 'Form Submitted')
    }

    handleChange = (event) => {
        this.setState({
            todo: event.target.value,
        });
    };

    render() {
        return (
            <div className="app">
                <h1>To-Do Wizard</h1>
                <form className='add-todo' onSubmit={this.addTodoItem}>
                    <input
                        type="text"
                        placeholder="Add Item"
                        onChange={this.handleChange}
                        value={this.state.todo}
                    />
                <button type="submit">Cast</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
