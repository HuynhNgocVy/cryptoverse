import React, { useState, useEffect} from 'react';
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
const Navbar = () => {
    const [menu, setMenu] = useState(true)
    const [screenSize, setScreenSize] = useState()

    useEffect(() => {
        const handleScreenSize = () => {
            setScreenSize(window.innerWidth)
        }
        window.addEventListener('resize', handleScreenSize)
        return () => {
            window.removeEventListener('resize', handleScreenSize)
        }
    }, [])
    useEffect(() => {
        if(screenSize < 800) {
            setMenu(false)
        }
        else {
            setMenu(true)
        }
    }, [screenSize])

  return <div className='nav-container'>
    <div className='logo-container'>
        <Typography.Title level={2} className='logo'>
            <Link to="/">Crytoverse</Link>
        </Typography.Title>
        <Button className="menu-control-container" onClick={() => setMenu(!menu)}> <MenuOutlined /> </Button>
    </div>
    {menu && (
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/crytocurrencies">Crytocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>

    )}
  </div>;
};

export default Navbar;
