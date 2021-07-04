import React from 'react';
import {
  Button, List, Popconfirm,
} from 'antd';
import { DeleteOutlined, CheckOutlined, EditOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import Edit from './edit';
import { deleteTodo, handleUpdate } from '../actions/getMylist';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
      isModalVisible: false,
    };

    // delete

    this.deleteMe = (index) => {
      // eslint-disable-next-line no-shadow
      const { deleteTodo } = this.props;
      deleteTodo(index);
    };

    // complete

    this.handleComplete = (item) => {
      // eslint-disable-next-line no-shadow
      const { handleUpdate } = this.props;
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
  }

  render() {
    const { todos } = this.props;
    const { isModalVisible, item } = this.state;
    return (
      <div>
        <h1>TODO List</h1>
        <List
          dataSource={todos}
          renderItem={(itemm, index) => (
            <List.Item>
              {itemm.title}
              <div style={{ float: 'right' }}>
                <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={() => this.editModal(itemm)} />
                <Button type="primary" shape="circle" icon={<CheckOutlined />} style={itemm.isChecked ? { background: 'green', margin: '0px 10px' } : { background: ' #1890ff', margin: '0px 10px' }} onClick={() => this.handleComplete(itemm)} />
                <Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={() => this.deleteMe(index)}
                  onCancel={this.cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button href="#" type="primary" shape="circle" icon={<DeleteOutlined />} />
                </Popconfirm>

              </div>

              <Edit
                isModalVisible={isModalVisible}
                handleCancel={this.handleCancel}
                item={item}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.Todos,
});
const mapDispatchToProsp = {
  deleteTodo,
  handleUpdate,
};
export default connect(mapStateToProps, mapDispatchToProsp)(TodoList);
