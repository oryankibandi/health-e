import mongoose from 'mongoose';

const { Schema } = mongoose;

const patientSchema = new Schema({
  idNo: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  location: { type: String, default: 'Nairobi' },
  email: String,
  gender: { type: String, required: true },
  nextOfKin: Array,
  patientHash: { type: String, required: true },
  records: [{ type: String }],
});

export default mongoose.model('Patient', patientSchema);
