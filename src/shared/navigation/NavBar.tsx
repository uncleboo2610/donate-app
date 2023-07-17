import { useState, useCallback } from 'react';
import Icon, { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { FaSignOutAlt, FaSun } from "react-icons/fa";
import { Avatar, MenuProps } from 'antd';
import { Menu } from 'antd';
import default_avatar from "../assets/sponsor_icon.webp";
import { useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
    {
        icon: <UserOutlined />,
        key: `account`,
        children: [
            {
                label: "Profile",
                key: `account-profile`,
                icon: <UserOutlined />,
            },
            {
                label: "Logout",
                key: `account-logout`,
                icon: <Icon component={FaSignOutAlt} />,
            },
        ],
    },
    {
        icon: <MenuOutlined />,
        key: `setting`,
        children: [
            {
                label: "Home",
                key: `home`,
                icon: <Icon component={FaSun} />,
            },
            {
                label: "Donate",
                key: `donation`,
                icon: <Icon component={FaSun} />,
            },
        ],
    },
  ];

export const NavBar = () => {
    const [current, setCurrent] = useState('mail');
    const navigate = useNavigate();

    const handleMenuClick = useCallback<NonNullable<MenuProps['onClick']>>(
        (info) => {
            if (info.key === "donation") {
                navigate("/donation");
            }
            if (info.key === "home") {
                navigate("/");
            }
    },
    [navigate]
    );

  return (
    <Menu 
        onClick={handleMenuClick} 
        selectedKeys={[current]} 
        mode="horizontal" 
        items={items} 
        theme="dark"
    />
    );
}

function UserAvatar() {
    // const { user } = useUserProfileStore();

    return <Avatar src={default_avatar} shape="circle" />;
}