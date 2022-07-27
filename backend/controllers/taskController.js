const catchAsync = require('../utils/catchAsync');

const Task = require('../models/taskModel');

exports.createTask = catchAsync(async (req, res, next) => {
  const task = await Task.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      task,
    },
  });
});

exports.getAllTasks = (req, res, next) => {
  console.log('all tasks');

  res.status(200).json({
    status: 'success',
    data: {},
  });
};
