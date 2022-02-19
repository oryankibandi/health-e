import mongoose from 'mongoose';

const { Schema } = mongoose;

const medRecordSchema = new Schema({
  genHash: { type: String, required: true },
  records: [
    {
      patientIdNo: { type: String, required: true },
      date: { type: Date, required: true, default: Date.now() },
      clinic: { type: String, required: true },
      doctor: { type: String, required: true }, //userId
      hash: { type: String, required: true },
      nonce: { type: Number, required: true },
      previousHash: { type: String, required: true },
      record: {
        symptoms: [{ type: String, default: null }],
        testsDone: Array,
        diagnosis: { type: String },
        prescription: [
          {
            name: { type: String, default: null },
            type: { type: String, default: null },
            method: { type: String, default: null },
          },
        ],
        nextAppointment: {
          date: { type: String, default: null },
          time: { type: Date, default: Date.now() },
        },
      },
    },
  ],
});

export default mongoose.model('MedicalRecord', medRecordSchema);
