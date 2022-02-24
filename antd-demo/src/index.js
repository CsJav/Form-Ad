import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Form, Input, Select, Tooltip, Button, Space, Typography, DatePicker, Card } from 'antd';
import moment from 'moment';
import './App.css';

const { Option } = Select;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { Meta } = Card;

const Demo = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>

      <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center',marginBottom: 35}}>Survey Form</h1>

      {/* FirstName */}
      <Form.Item label="First Name">
        <Form.Item
          name="fname"
          noStyle
          rules={[{ required: true, message: 'Name is required' }]}
          >
          <Input style={{ width: 150, boxShadow: "1px 1px #b9b9b9", borderRadius: 5}} placeholder="First Name" />
        </Form.Item>
      </Form.Item>

      {/* LastName */}
      <Form.Item label="Last Name">
        <Form.Item
          name="lname"
          noStyle
          rules={[{ required: true, message: 'Name is required' }]}
          >
          <Input style={{ width: 150, boxShadow: "1px 1px #b9b9b9", borderRadius: 5}} placeholder="Last Name" />
        </Form.Item>
      </Form.Item>

      {/* Gender */}
      <Form.Item label="Gender">
          <Form.Item
            name="Gender"
            noStyle
            // rules={[{ required: true, message: 'Gender is required' }]}
          >
            <Select style={{ width: 150, boxShadow: "1px 1px #b9b9b9", borderRadius: 5}} placeholder="Gender">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Undefined">Undefined</Option>
            </Select>
          </Form.Item>
      </Form.Item>

      {/* Dbo */}
      <Form.Item  label="DateofBirth" style={{ marginBottom: 0}}>
        <Form.Item
          name="DateofBirth"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
          <DatePicker style={{ width: 150, boxShadow: "1px 1px #b9b9b9", borderRadius: 5 }} defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
        </Form.Item>
      </Form.Item>

      {/* Submit */}
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit" style={{ width: 150, position:'absolute',borderRadius: 5}}>
          Submit
        </Button>
      </Form.Item>
    </Form>

      

  );
};

// position:absolute; left: 50%; top: 50%; transform:translate(-50%, -50%)

ReactDOM.render(
  <React.StrictMode>
    <Card
    hoverable
    style={{ width: 450 , borderRadius: 5, paddingTop: 30}}
    >
    <Demo />
  </Card>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


