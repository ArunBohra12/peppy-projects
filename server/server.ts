import { Server } from 'http';
import * as dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import connectDB from './db';

connectDB();

import app from './app';

const port = process.env.port || 8000;
const server: Server = app.listen(port, () => console.log(`Server is up and running on port ${port}`));

process.on('unhandledRejection', error => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  if (error instanceof Error) {
    console.log(error.name, error.message);
  }

  server.close(() => {
    process.exit(1);
  });
});
