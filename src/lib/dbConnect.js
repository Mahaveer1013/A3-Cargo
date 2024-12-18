import mongoose from 'mongoose';

const dbConnect = async () => {
  // Use environment variable or fallback to localhost URL
  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';

  if (mongoose.connection.readyState >= 1) {
    return; // If already connected, skip the connection step
  }

  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('MongoDB connection error');
  }
};

export default dbConnect;
