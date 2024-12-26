import mongoose from 'mongoose';

export const connectToDB = async () => {
    const mongoDBUrl = process.env.MONGODB_URL;

    if (!mongoDBUrl) {
        console.error('Error: MONGODB_URL is not defined in environment variables');
        process.exit(1); // Exit the process if the environment variable is missing
    }

    try {
        await mongoose.connect(mongoDBUrl);
        console.log('Connected to MongoDB');
    } catch (error: unknown) {
        // Narrow the type of error to an instance of Error
        if (error instanceof Error) {
            console.error('Error connecting to MongoDB:', error.message);
        } else {
            console.error('Unknown error connecting to MongoDB:', error);
        }
        mongoose.disconnect();
        process.exit(1);
    }
};
