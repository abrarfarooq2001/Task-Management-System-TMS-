import React, { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';



const Layout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className='main-container'>
        <div className='head'>
        <Header toggle={() => setCollapsed(!collapsed)} />
        </div>
        <div className='side'>
        <Sidebar collapsed={collapsed} />
        </div>
        <div style={{ marginLeft: collapsed ? '70px' : '220px', padding: '20px' }}>
        {children}
      </div>
      </div>
    </>
  );
};

export default Layout;