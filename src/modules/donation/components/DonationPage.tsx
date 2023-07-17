import { Avatar, Col, Divider, List, Row, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useRef, useState } from 'react'
import useDonation from '../hooks/useDonation';
import { donationService } from '../service/donation.service';
import { IDonation, ITopDonation } from '../models';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import DonationForm, { RefObject } from './DonationForm';
import { WSEndpoints } from '../../../shared/config/websocket.config';

export const DonationPage = () => {
    const child = useRef<RefObject>(null);
    // const [ data ] = useDonation();
    const [data, setData] = useState<IDonation[]>([]);

    useEffect(() => {
        donationService.getAllDonations()
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => console.log(error))
    }, [])
    
    const UpdateDonation = async () => {
        try {
            const conn = new HubConnectionBuilder()
            .withUrl(WSEndpoints.DonationHub)
            .configureLogging(LogLevel.Information)
            .build();
            
            conn.on('GetAllUpdateDonations', (donations) => {
                setData(donations);
            })
            
            await conn.start();
            await conn.invoke('UpdateDonation');
            
        } catch (error) {
            console.log(error);
        }
    };

    const submitFormModal = (values: any) => {
        donationService.addDonation(values)
            .then(() => {
                UpdateDonation();
            })
            .catch((e:any) => console.log(e));
    };

    const columnsTopDonation: ColumnsType<ITopDonation> = [    
        {
            title: 'Top',
            dataIndex: 'key',
        },
        {
          title: 'Name',
          dataIndex: 'donateUserName',
        },
        {
          title: 'Money',
          dataIndex: 'donateMoney',
        },
    ];
      
    const dataTable: ITopDonation[] = data.map((donation, i) => ({
        key: i + 1,
        id: donation.id,
        userId: donation.userId,
        donateUserName: donation.donateUserName,
        donateMoney: donation.donateMoney,
    }));
    
    const dataDonation = data.map((donation, i) => ({
        href: 'https://ant.design',
        donateUserName: donation.donateUserName,
        avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
        donateMoney: donation.donateMoney,
        donateMessage: donation.donateMessage,
    }));

  return (
    <Row>
        <Col span={8}>
            <>
                <Divider>Top Donation</Divider>
                <Table style={{marginLeft:'1rem'}} columns={columnsTopDonation} dataSource={dataTable} size="small" />
            </>
            <>
                <Divider>Donate here !!!</Divider>
                <DonationForm
                    ref={child.current?.openModal}
                    submitFormModal={submitFormModal}
                />
            </>
        </Col>
        <Col span={16}>
            <Divider>Recent Donations</Divider>
            <List
                style={{marginLeft:'1rem', marginRight:'1rem'}}
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 10,
                }}
                dataSource={dataDonation}
                renderItem={(item) => {
                    return (
                        <List.Item
                            key={item.avatar}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={item.donateUserName}
                                description={<p>Donate for BooGaming - {item.donateMoney}$ with the message :</p>} />
                            {item.donateMessage}
                        </List.Item>
                    );
                }}
            />
        </Col>
    </Row>
  )
}
