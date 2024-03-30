import mongoose, { type ConnectOptions } from 'mongoose';

const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      serverSelectionTimeoutMS: 5000,
    } as ConnectOptions);
  } catch (error) {}
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (): void => {
  console.log('🚀  Database connected!');
});

connect();

export { db };
