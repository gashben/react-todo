import React from 'react';
import { Input, Button, Form } from 'antd';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.onFinish = (values) => {
      const { handleValues } = this.props;
      this.ref.current.resetFields();
      handleValues(values);
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

export default Todo;
