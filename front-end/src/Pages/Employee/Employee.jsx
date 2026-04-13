import React from 'react';
import { Button, Input,Table, Avatar } from 'antd';
import './Employee.css';

const Employees = () => {

  const columns = [
    {
      title: "S No",
      dataIndex: "key",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (img) => <Avatar src={img} size={40} />,
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
      image: "https://i.pravatar.cc/40?img=1",
      name: "Yousaf",
      dob: "2/13/2007",
      department: "Database",
    },
    {
      key: "2",
      image: "https://i.pravatar.cc/40?img=2",
      name: "Asif",
      dob: "6/29/2022",
      department: "Database",
    },
    {
      key: "3",
      image: "https://i.pravatar.cc/40?img=3",
      name: "Khalil",
      dob: "6/15/2021",
      department: "Database",
    },
    {
      key: "4",
      image: "https://i.pravatar.cc/40?img=4",
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
        <Button className='add-btn'>Add New Employee</Button>

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