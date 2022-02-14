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
        symptoms: [{ type: String, required: true }],
        testsDone: Array,
        diagnosis: { type: String, required: String },
        prescription: [
          {
            name: { type: String, required: true },
            type: { type: String, required: true },
            method: { type: String, required: true },
          },
        ],
        nextAppointment: {
          date: { type: String },
          time: { type: Date },
        },
      },
    },
  ],
});

export default mongoose.model('MedicalRecord', medRecordSchema);
