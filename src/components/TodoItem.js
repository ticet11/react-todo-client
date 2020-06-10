import React from "react";

export default class TodoItem extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { title, done } = this.props.todoData;
        return (
            <div className="todo-item">
                <input type="checkbox" />
                <p>{title}</p>
            </div>
        );
    }
}
