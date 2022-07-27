const express = require('express');
const { default: mongoose } = require('mongoose');
const morgan = require('morgan');
const taskRouter = require('./routers/taskRoutes');

const app = express();

// Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Resources
app.use('/api/v1/tasks', taskRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Cannot ${req.method} ${req.path}`,
  });
});

app.use(express.json());

module.exports = app;
