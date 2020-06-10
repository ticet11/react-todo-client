import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            todo: "",
        };
    }

    handleChange = (event) => {
      this.setState({
        todo: event.target.value
      })
    }

    render() {
        return (
            <div className="app">
                <h1>To-Do Wizard</h1>
                <form action="">
                    <input
                        type="text"
                        placeholder="Add Item"
                        onChange={this.handleChange}
                        value={this.state.todo}
                    />
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
