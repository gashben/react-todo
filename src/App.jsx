import React from 'react';
import 'antd/dist/antd.css';
import Todo from './components/todo';
import TodoList from './components/todoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myList: localStorage.getItem('myStorage') ? JSON.parse(localStorage.getItem('myStorage')) : [],
    };

    this.componentDidMount = () => {
      const { myList } = this.state;
      localStorage.setItem('myStorage', JSON.stringify(myList));
    };

    this.componentDidUpdate = () => {
      const { myList } = this.state;
      localStorage.setItem('myStorage', JSON.stringify(myList));
    };

    this.handleValues = (values) => {
      const { myList } = this.state;
      this.setState({
        myList: [{
          ...values,
          id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
          isChecked: false,
        },
        ...myList],
      });
    };

    this.handleUpdate = (item) => {
      const { myList } = this.state;
      const lastResulte = [...myList].map((object) => {
        if (object.id === item.id) {
          return item;
        }
        return object;
      });
      this.setState({ myList: lastResulte });
    };

    // delete
    this.handleDelete = (index) => {
      const { myList } = this.state;
      myList.splice(index, 1);
      this.setState({ myList });
    };
  }

  render() {
    const { myList } = this.state;
    return (

      <div style={{ padding: '0px 200px' }}>
        <Todo handleValues={this.handleValues} />
        <TodoList
          myList={myList}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
