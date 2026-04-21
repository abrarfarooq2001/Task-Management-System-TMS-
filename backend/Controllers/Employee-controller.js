const EmployeeForm = require("../Models/Employee-Scheema");

// Controller to get all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await EmployeeForm.find({});
        res.status(200).json({
            success: true,
            data: employees
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while fetching employees",
            error: error.message
        });
    }
};

module.exports = {
    getAllEmployees
};