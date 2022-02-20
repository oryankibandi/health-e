import mongoose from 'mongoose';

const { Schema } = mongoose;

const clinicSchema = Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  opening: { type: String, default: '8' },
  closing: { type: String, default: '20' },
  admin: { type: String, required: true },
  doctors: [{ type: String, default: 'none' }],
});

export default mongoose.model('Clinic', clinicSchema);
