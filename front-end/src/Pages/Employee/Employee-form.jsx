import { Form, Input, Button, DatePicker, Select, Upload, } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./Employee-form.css";
import { useNavigate } from 'react-router-dom';




const EmployeeForm = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    function handleFinish() {
    form.resetFields();
    }


    return (
        <div className="employee-form-container">
            <div className="employee-form-header">
                <h2 className="employee-form-title">Add New Employee</h2>
                <Button
                    className="back-btn"
                    onClick={() => navigate('/employee')}
                    type="default"
                >
                    Back to Employees
                </Button>
            </div>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                className="employee-form"
            >
                <div className="employee-form-grid">
                    <div className="employee-form-col">
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[{ required: true, message: "Please enter the name" }]}
                        >
                            <Input placeholder="Enter name" />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { required: true, message: "Please enter the email" },
                                { type: "email", message: "Please enter a valid email" },
                            ]}
                        >
                            <Input placeholder="Enter email" />
                        </Form.Item>

                        <Form.Item
                            name="employeeId"
                            label="Employee ID"
                            rules={[{ required: true, message: "Please enter the Employee ID" }]}
                        >
                            <Input placeholder="Enter Employee ID" />
                        </Form.Item>

                        <Form.Item
                            name="dob"
                            label="Date of Birth"
                            rules={[{ required: true, message: "Please select date of birth" }]}
                        >
                            <DatePicker style={{ width: "100%" }} />
                        </Form.Item>

                        <Form.Item
                            name="gender"
                            label="Gender"
                            rules={[{ required: true, message: "Please select gender" }]}
                        >
                            <Select placeholder="Select gender">
                                <Select.Option value="male">Male</Select.Option>
                                <Select.Option value="female">Female</Select.Option>
                                <Select.Option value="other">Other</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="maritalStatus"
                            label="Marital Status"
                            rules={[{ required: true, message: "Please select marital status" }]}
                        >
                            <Select placeholder="Select marital status">
                                <Select.Option value="single">Single</Select.Option>
                                <Select.Option value="married">Married</Select.Option>
                                <Select.Option value="divorced">Divorced</Select.Option>
                                <Select.Option value="widowed">Widowed</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="employee-form-col">
                        <Form.Item
                            name="designation"
                            label="Designation"
                            rules={[{ required: true, message: "Please enter designation" }]}
                        >
                            <Input placeholder="Enter designation" />
                        </Form.Item>

                        <Form.Item
                            name="department"
                            label="Department"
                            rules={[{ required: true, message: "Please enter department" }]}
                        >
                            <Input placeholder="Enter department" />
                        </Form.Item>

                        <Form.Item
                            name="salary"
                            label="Salary"
                            rules={[
                                { required: true, message: "Please enter salary" },
                                {
                                    pattern: /^-?\d+(\.\d{1,2})?$/,
                                    message: "Please enter a valid amount",
                                },
                            ]}
                        >
                            <Input placeholder="Enter salary" type="number" min={0} />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[{ required: true, message: "Please enter password" }]}
                        >
                            <Input.Password placeholder="Enter password" />
                        </Form.Item>

                        <Form.Item
                            name="role"
                            label="Role"
                            rules={[{ required: true, message: "Please select role" }]}
                        >
                            <Select placeholder="Select role">
                                <Select.Option value="employee">Employee</Select.Option>
                                <Select.Option value="manager">Manager</Select.Option>
                                <Select.Option value="admin">Admin</Select.Option>
                            </Select>
                        </Form.Item>

                    </div>
                </div>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="submit-btn">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default EmployeeForm;