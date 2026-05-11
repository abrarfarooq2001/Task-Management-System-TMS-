import React from 'react';
import { Button, Input,Table } from 'antd';
import './Employee.css';
import { useNavigate } from 'react-router-dom';


const Employees = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "S No",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "DOB",
      dataIndex: "dob",
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Action",
      render: () => (
        <div className="action-buttons">
          <Button className="view-btn" color='primary' variant='solid'>View</Button>
          <Button className="edit-btn" color='green' variant='solid'>Edit</Button>
          <Button className="salary-btn" color='yellow' variant='solid'>Salary</Button>
          <Button className="leave-btn" color='danger' variant='solid'>Leave</Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Yousaf",
      dob: "2/13/2007",
      department: "Database",
    },
    {
      key: "2",
      name: "Asif",
      dob: "6/29/2022",
      department: "Database",
    },
    {
      key: "3",
      name: "Khalil",
      dob: "6/15/2021",
      department: "Database",
    },
    {
      key: "4",
      name: "Latif",
      dob: "6/9/2020",
      department: "IT",
    },
  ];
  return (
    <>
      <div className='em-heading'>Employee Management</div>
      <div className='em-header'>

        <Input className="search-input" placeholder="Search By employee ID" />
        <Button className='add-btn' onClick={() => navigate('/employee-form')} >Add New Employee</Button>

      </div>

      <div className="employee-table">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
        />
      </div>
    </>
  );
};

export default Employees;