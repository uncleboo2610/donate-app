import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const MainVideoPage = () => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        navigate(`/room/${values.code}`)
    };
      
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

  return (
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
        label="code"
        name="code"
        rules={[{ message: 'Please input your code!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
    </Form>
  )
}
