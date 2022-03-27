const Employee = require('../models/employee');

exports.createEmployee = (req, res, next) => {
  const employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    startDate: req.body.startDate,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    department: req.body.department
  });
  employee.save().then(
    () => {
      res.status(201).json(employee);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// not needed for this project
exports.getOneEmployee = (req, res, next) => {
  Employee.findOne({
    _id: req.params.id
  }).then(
    (employee) => {
      res.status(200).json(employee);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

// not needed for this project
exports.modifyEmployee = (req, res, next) => {
  const employee = new Employee({
    _id: req.params.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    startDate: req.body.startDate,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    department: req.body.department
  });
  Employee.updateOne({_id: req.params.id}, employee).then(
    () => {
      res.status(201).json({
        message: 'Employee updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// not needed for this project
exports.deleteEmployee = (req, res, next) => {
  Employee.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllEmployees = (req, res, next) => {
  Employee.find().then(
    (employees) => {
      res.status(200).json(employees);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};