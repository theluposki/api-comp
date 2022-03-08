import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL || process.env.MONGO_DEV_URL)

export default mongoose
