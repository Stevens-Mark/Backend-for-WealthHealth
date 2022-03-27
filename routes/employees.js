const express = require('express');
const router = express.Router();

const employeeCtrl = require('../controllers/employee');

router.get('/', employeeCtrl.getAllEmployees);
router.post('/', employeeCtrl.createEmployee);
router.get('/:id', employeeCtrl.getOneEmployee);
router.put('/:id', employeeCtrl.modifyEmployee);
router.delete('/:id', employeeCtrl.deleteEmployee);

module.exports = router;