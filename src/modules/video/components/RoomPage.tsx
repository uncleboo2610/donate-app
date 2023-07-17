import React from 'react'
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { Row, Col, Space, Form, Button, Input } from 'antd';
import '../styles/styles.less';

export const RoomPage = () => {
    const { roomId } = useParams();
    
    const myMeeting =async (element: any) => {
        const appID = 150261337;
        const serverSecret = "0a033157c94cf070c328460fcb7ca1aa";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, String(roomId), Date.now().toString(), "uncleboo");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.LiveStreaming,
            },
            showTurnOffRemoteCameraButton: false, 
            showTurnOffRemoteMicrophoneButton: false, 
            showRemoveUserButton: false
        });
    }
  return (
    <Row>
        <Row style={{width: '100%'}}>
            <Col>
                <Space>
                    <div
                      className="myCallContainer"
                      ref={myMeeting}
                    ></div>
                </Space>
            </Col>
            <Col> 
              <Space>
                  <Form
                    name="wrap"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    colon={false}
                  >
                      <Form.Item label="正常标签文案" name="username" rules={[{ required: true }]}>
                        <Input />
                      </Form.Item>

                      <Form.Item label="超长标签文案超长标签文案" name="password" rules={[{ required: true }]}>
                        <Input />
                      </Form.Item>

                      <Form.Item label="超长标签文案超长标签文案" name="password" rules={[{ required: true }]}>
                        <Input />
                      </Form.Item>

                      <Form.Item label="超长标签文案超长标签文案" name="password" rules={[{ required: true }]}>
                        <Input />
                      </Form.Item>

                      <Form.Item label="超长标签文案超长标签文案" name="password" rules={[{ required: true }]}>
                        <Input />
                      </Form.Item>

                      <Form.Item label=" ">
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
                  </Form>
              </Space>
            </Col>
        </Row>
        <Row></Row>
    </Row>
  )
}
