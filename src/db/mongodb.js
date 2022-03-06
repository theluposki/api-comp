import mongoose from 'mongoose';
//'mongodb://localhost:27017/myapp'
//`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
//mongodb://username:password@host:port/database?options...
mongoose.connect('mongodb://localhost:27017/myapp')

export default mongoose
