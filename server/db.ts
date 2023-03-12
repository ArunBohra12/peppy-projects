import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const url: string = process.env.DATABASE_URL || '';

    if (!url) throw new Error('Please provide a valid database url');

    await mongoose.connect(url);
    console.log('Connected to DB');
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    console.log('Unknown error occurred');
    throw new Error('Unknown error occurred');
  }
};

export default connectDB;
