import React from 'react';
import { Input, Button, Form } from 'antd';
import { connect } from 'react-redux';
import { addTodo } from '../actions/getMylist';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.onFinish = (values) => {
      const newData = {
        id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        isChecked: false,
        ...values,
      };

      // eslint-disable-next-line react/destructuring-assignment
      this.props.addTodo(newData);
      this.ref.current.resetFields();
    };
    this.ref = React.createRef();
  }

  render() {
    return (
      <div>
        <h1 align="center">ToDo </h1>
        <Form
          layout="vertical"
          name="form-todo"
          onFinish={this.onFinish}
          ref={this.ref}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input title!' }]}
          >
            <Input placeholder="Enter Title" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Todo
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProsp = {
  addTodo,
};
export default connect(null, mapDispatchToProsp)(Todo);
