const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskId: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
    required: [true, 'Please provide a task title'],
  },
  createdBy: {
    name: { type: String },
    id: { type: String },
  },
  assignedTo: {
    name: { type: String },
    id: { type: String },
  },
  status: {
    type: String,
    required: [true, 'Please provide a task status'],
  },
  priority: {
    type: String,
    required: [true, 'Please provide a task priority'],
    enum: {
      values: ['Medium', 'High', 'Low', 'Urgent'],
      message: 'Priority must be one of Medium, High, Low or Urgent',
    },
  },
  dueDate: {
    type: Date,
    required: [true, 'Please provide a task due date'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
    required: [true, 'Please provide a task description'],
  },
  project: {
    type: String,
    required: [true, 'Please provide a project for the task'],
  },
  comments: [
    {
      by: {
        id: { type: String },
        name: { type: String },
      },
      comment: {
        type: String,
      },
      date: {
        type: Date,
      },
    },
  ],
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
