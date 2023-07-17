import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Input, Tooltip, Button, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { donationService } from '../service/donation.service';
import { Ref, forwardRef, useImperativeHandle } from 'react';

export interface RefObject {
    openModal: () => void;
}

interface Props {
    submitFormModal: (value: any) => void
}

function DonationForm (props: Props, ref: Ref<RefObject>) {
    const {submitFormModal} = props

    function openModal() {
        console.log('ok');
    }

    const handleSubmitFormModal = (values: any) => {
        submitFormModal(values);
    };

    useImperativeHandle(ref, () => ({ openModal }));


  return (
    <Form
        name="donationform"
        autoComplete="off"
        onFinish={handleSubmitFormModal}
    >
        <Form.Item
            name="donateusername"
            rules={[{ message: 'Please input your name!' }]}
        >
            <Input
                placeholder="Enter your name"
                prefix={<UserOutlined className="site-form-item-icon" />}
                suffix={
                    <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
            />
        </Form.Item>

        <Form.Item name="donatemoney" >
            <Input prefix="$" suffix="USD" type='number' />
        </Form.Item>

        <Form.Item  name="donatemessage" >
            <TextArea rows={4} placeholder="Your message here..." />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Donate
            </Button>
        </Form.Item>
    </Form>
  )
}

export default forwardRef(DonationForm);