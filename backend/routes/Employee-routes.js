const express = require('express');
const router = express.Router();
const { getAllEmployees } = require('../Controllers/Employee-controller');

// Home page route (customize for your own site)
router.get('/', (req, res) => {
  res.render('index', { title: 'Employee Management System' });
});

// Route to get all employees
router.get('/employees', getAllEmployees);

module.exports = router;
