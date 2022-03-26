const express = require('express');
const router = express.Router();

const employeeCtrl = require('../controllers/employee');

router.get('/', employeeCtrl.getAllStuff);
router.post('/', employeeCtrl.createThing);
router.get('/:id', employeeCtrl.getOneThing);
router.put('/:id', employeeCtrl.modifyThing);
router.delete('/:id', employeeCtrl.deleteThing);

module.exports = router;