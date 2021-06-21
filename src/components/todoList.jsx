import React from 'react';
import {
  Button, List, Popconfirm, message,
} from 'antd';
import { DeleteOutlined, CheckOutlined, EditOutlined } from '@ant-design/icons';
import Edit from './edit';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // isChecked: false,
      item: {},
      isModalVisible: false,
    };
    const { handleDelete } = this.props;

    // delete
    this.deleteMe = (index) => {
      handleDelete(index);
    };

    // complete
    const { handleUpdate } = this.props;
    this.handleComplete = (item) => {
      const newItem = {
        ...item,
        isChecked: !item.isChecked,
      };
      handleUpdate(newItem);
      this.setState({ item: newItem });
    };

    // edit

    this.editModal = (item) => {
      this.setState({ isModalVisible: true, item: { ...item } });
    };

    this.handleCancel = () => {
      this.setState({ isModalVisible: false });
    };

    this.confirm = (e) => {
      console.log(e);
      message.success('Click on Yes');
    };

    this.cancel = (e) => {
      console.log(e);
      message.error('Click on No');
    };
  }

  render() {
    const { myList, handleUpdate } = this.props;
    const { isModalVisible, item } = this.state;
    return (
      <div>
        <h1>TODO List</h1>
        <List
          dataSource={myList}
          renderItem={(itemm, index) => (
            <List.Item>
              {itemm.title}
              <div style={{ float: 'right' }}>
                <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={() => this.editModal(itemm)} />
                <Button type="primary" shape="circle" icon={<CheckOutlined />} style={itemm.isChecked ? { background: 'green', margin: '0px 10px' } : { background: ' primary', margin: '0px 10px' }} onClick={() => this.handleComplete(itemm)} />
                <Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={window.confirm}
                  onCancel={window.cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button href="#" type="primary" shape="circle" icon={<DeleteOutlined />} onClick={() => this.deleteMe(index)} />
                </Popconfirm>

              </div>

              <Edit
                isModalVisible={isModalVisible}
                handleCancel={this.handleCancel}
                item={item}
                handleUpdate={handleUpdate}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList;
