import { Input, Button, Form, message } from 'antd';
import React, { useState } from 'react'
import { authService } from '../service/auth.service';

interface ILoginForm{
    email: string
    password: string
}

export const LogInPage = () => {
    const [err, setErr] = useState<Error | null>(null);

    const onFinish = (values: ILoginForm) => {
        authService.logIn(values)
            .then(( token ) => {
                authService.saveToken(String(token))
            })
            .catch((e) => {
                setErr(e)
                message.error(err + "")
            })
    };
      
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

  return (
    <Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        >
        <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
    </Form>
  )
}
