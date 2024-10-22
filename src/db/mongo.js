import mongoose from 'mongoose';
import config from '../config/env.js';

let isConnectedBefore = false;

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // 5 seconds timeout for initial connection
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection timeout:', error.message);
    retryConnection();
  }
};

// Handle disconnection and reconnection attempts
mongoose.connection.on('disconnected', () => {
  console.error('MongoDB disconnected! Attempting reconnection...');
  if (!isConnectedBefore) {
    retryConnection();
  }
});

// Connection error handling
mongoose.connection.on('error', (error) => {
  console.error('MongoDB error:', error.message);
});

// Retry logic for reconnection
const retryConnection = () => {
  setTimeout(async () => {
    try {
      await mongoose.connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB reconnected successfully');
    } catch (error) {
      console.error('Retry connection failed:', error.message);
      retryConnection(); // Keep retrying on failure
    }
  }, 5000); // Retry every 5 seconds
};

export default connectDB;
