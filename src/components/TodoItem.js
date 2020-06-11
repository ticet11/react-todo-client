import React from "react";

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: props.todoData.done,
        };
    }

    onCheck = () => {
        fetch(
            // `http://localhost:5000/todo/${this.props.todoData.id}`,
            `https://bk-todo-flask-api.herokuapp.com/todo/${this.props.todoData.id}`,
            {
                method: "PATCH",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    done: !this.state.done,
                }),
            }
        )
            .then(() => {
                this.setState({
                    done: !this.state.done,
                });
            })
            .catch((error) => {
                console.error("toggle done error", error);
            });
    };

    render() {
        const { title, id } = this.props.todoData;
        return (
            <div className="todo-item">
                <div className='check-item'>
                    <input
                        type="checkbox"
                        defaultChecked={this.state.done}
                        onClick={this.onCheck}
                    />
                    <p className={this.state.done ? "done" : null}>
                        {title}
                    </p>
                </div>
                <button onClick={() => this.props.deleteTodoItem(id)}>
                    X
                </button>
            </div>
        );
    }
}
