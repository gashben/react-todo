import React from 'react';
import 'antd/dist/antd.css';
import Todo from './components/todo';
import TodoList from './components/todoList';

class App extends React.Component {
  render() {
    return (

      <div style={{ padding: '0px 200px' }}>
        <Todo />
        <TodoList />
      </div>
    );
  }
}

export default App;
