import React from 'react';
import {
  Input, Button, Form, Modal,
} from 'antd';
import { connect } from 'react-redux';
import { handleUpdate } from '../actions/getMylist';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    // Edit

    this.refModal = React.createRef();

    this.componentDidUpdate = () => {
      const {
        isModalVisible, item,
      } = this.props;
      if (isModalVisible && item && item.id) {
        this.refModal.current.setFieldsValue({ ...item });
      }
    };

    this.onFinish = (values) => {
      const { handleCancel } = this.props;
      // eslint-disable-next-line react/destructuring-assignment
      this.props.handleUpdate(values);
      handleCancel();
    };
  }

  render() {
    const { isModalVisible, handleCancel } = this.props;
    return (
      <div>
        <Modal
          title="Edit..."
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >

          <Form
            name="modal-form"
            layout="vertical"
            ref={this.refModal}
            onFinish={this.onFinish}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'Please input title!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="id"
              hidden
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Update
              </Button>
            </Form.Item>
          </Form>

        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.Todos,
});
const mapDispatchToProsp = {
  handleUpdate,
};
export default connect(mapStateToProps, mapDispatchToProsp)(Edit);
