import { Col, Row } from 'antd';
import { MainVideoPage } from '../video/components/MainVideoPage';
import DonationForm from '../donation/components/DonationForm';

export const HomePage = () => {
  return (
    <Row>
        <Row style={{width: '100%'}}>
            <Col span={12}>
                <MainVideoPage />
            </Col>
            <Col span={12}> 
                {/* <DonationForm /> */}
            </Col>
        </Row>
        <Row></Row>
    </Row>
  )
}
