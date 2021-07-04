import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import Todo from './components/todo';
import TodoList from './components/todoList';
import { listTodos, addTodo } from './actions/getMylist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleValues = (values) => {
      // const { todos } = this.props;
      const newData = {
        id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        isChecked: false,
        ...values,
      };
      // eslint-disable-next-line react/destructuring-assignment
      this.props.addTodo(newData);
    };

    this.handleUpdate = (item) => {
      const { todos } = this.props;
      // eslint-disable-next-line no-unused-vars
      const lastResulte = [...todos].map((object) => {
        if (object.id === item.id) {
          return item;
        }
        return object;
      });
    };

    // delete
    this.handleDelete = (index) => {
      const { todos } = this.props;
      todos.splice(index, 1);
    };
  }

  render() {
    const { todos } = this.props;
    return (

      <div style={{ padding: '0px 200px' }}>
        <Todo handleValues={this.handleValues} />
        <TodoList
          myList={todos}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.Todos,
});
const mapDispatchToProsp = {
  listTodos,
  addTodo,
};
export default connect(mapStateToProps, mapDispatchToProsp)(App);
