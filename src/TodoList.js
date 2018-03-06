import React, {Component} from "react";

import Todo from "./Todo";
import { connect } from 'react-redux';
import { addTodo, removeTodo } from "./actionCreators";

class TodoList extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.state = {
      task: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.dispatch({
    //   type: "ADD_TODO",
    //   task: this.state.task
    // });

    this.props.addTodo(this.state.task);
    debugger;
    document.getElementById('task').value = '';
    //$(e.target).parent().reset();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  removeTodo(id, event) {
    // this.props.dispatch({
    //   type: "REMOVE_TODO",
    //   id: id
    // });
    this.props.removeTodo(id);
  }

  render() {
    let todos = this.props.todos.map((val, index) =>
      <Todo
        removeTodo={this.removeTodo.bind(this, val.id)}
        task={val.task}
        key={index}>
      </Todo>
    );
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            id="task"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Add a Todo!</button>
        </form>
        <div>
          <ul>
            {todos}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {todos: state.todos};
}

/*
function mapDispatchToProps(dispatch) {
  return {
    addTodo: function(task){
      dispatch({
        type: "ADD_TODO",
        task
      });
    }
  }
}
*/


export default connect(mapStateToProps, {addTodo, removeTodo})(TodoList);
