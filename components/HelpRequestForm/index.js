import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import SuburbAutocompleteSelectContainer from '../../containers/SuburbAutocompleSelectContainer';

const FormItem = Form.Item;
const InputTextArea = Input.TextArea;

const defaultLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const defaultValidateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const HelpRequestForm = ({ layout = defaultLayout, validateMessages = defaultValidateMessages, onFinish = ()=>{}, loading = false, ...props }) => {
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} {...props}>
      <FormItem
        name={['helpRequest', 'title']}
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </FormItem>
      <FormItem
        name={['helpRequest', 'suburb']}
        label="Suburb"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <SuburbAutocompleteSelectContainer
          placeholder={"Search for a Suburb"}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          notFoundContent={null}
        />
      </FormItem>
      <FormItem
        name={['helpRequest', 'description']}
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputTextArea />
      </FormItem>
      <FormItem wrapperCol={{ ...layout.wrapperCol }}>
        <Button loading={loading} type="primary" htmlType="submit">
          Submit
        </Button>
      </FormItem>
    </Form>
  );
};

export default HelpRequestForm;
