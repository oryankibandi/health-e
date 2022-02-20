import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { String },
  nationalId: { type: String },
  nationality: { type: Number, required: true, default: 254 },
  roles: [{ type: Number, required: true }],
  userId: { type: String, required: true },
  refreshToken: { type: String, required: false, default: null },
});

export default mongoose.model('User', userSchema);
