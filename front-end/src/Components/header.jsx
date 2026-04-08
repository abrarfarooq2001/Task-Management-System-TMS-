import React from 'react';
import './header.css';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
const Header = ({ toggle }) => {
    return (
        <div className='header'>
            <div className='left-side'>
            <MenuOutlined className='menu-icon' onClick={toggle} />
                <div className='logo'>@Taskco</div>
            </div>
            <div className='right-side'>Welcome, Admin  <Button >Logout</Button></div>
        </div>
    )
}

export default Header;
