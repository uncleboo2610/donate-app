import { Button, Layout, Space } from 'antd'
import React from 'react'
import { NavBar } from '../navigation/NavBar'
import { Link, Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <Layout>
        <Layout.Header title="DONATE DEMO">
            <Space
                direction="horizontal"
                align="center"
                style={{
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <div className="sidebar-menu">
                    <Link to="/" style={{color:'white'}}>
                        DONATE DEMO
                    </Link>
                </div>
                <NavBar />
            </Space>
        </Layout.Header>
        <Layout.Content>
            <Outlet />
        </Layout.Content>
    </Layout>
  )
}
