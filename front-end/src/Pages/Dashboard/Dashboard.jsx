import { ApartmentOutlined, CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined, FileTextOutlined, TeamOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <div className='dashborad-heading'>Dashboard Overview</div>

      <div className="parent1">

        <Card className="custom-card">
          <div className="card-content">

            <div className="card-icon">
              <TeamOutlined />
            </div>

            <div className="card-text">
              <h3>Total Employees</h3>
              <h2>4</h2>
            </div>

          </div>
        </Card>

        <Card className="custom-card">
          <div className="card-content">

            <div className="card-icon">
              <ApartmentOutlined />
            </div>

            <div className="card-text">
              <h3>Total Department</h3>
              <h2>4</h2>
            </div>

          </div>
        </Card>

      </div>

      <h2 style={{ textAlign: 'center', marginTop: '30px' }}>
        Leave Details
      </h2>

      <div className="leave-container">

        <Card className="custom-card">
          <div className="card-content">
            <div className="card-icon green">
              <FileTextOutlined />
            </div>
            <div className="card-text">
              <h3>Leave Applied</h3>
              <h2>2</h2>
            </div>
          </div>
        </Card>

        <Card className="custom-card">
          <div className="card-content">
            <div className="card-icon success">
              <CheckCircleOutlined />
            </div>
            <div className="card-text">
              <h3>Leave Approved</h3>
              <h2>2</h2>
            </div>
          </div>
        </Card>

        <Card className="custom-card">
          <div className="card-content">
            <div className="card-icon warning">
              <ClockCircleOutlined />
            </div>
            <div className="card-text">
              <h3>Leave Pending</h3>
              <h2>1</h2>
            </div>
          </div>
        </Card>

        <Card className="custom-card">
          <div className="card-content">
            <div className="card-icon danger">
              <CloseCircleOutlined />
            </div>
            <div className="card-text">
              <h3>Leave Rejected</h3>
              <h2>1</h2>
            </div>
          </div>
        </Card>

      </div>
    </>
  );


};

export default Dashboard;