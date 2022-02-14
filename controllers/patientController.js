import Patient from '../dev/patient.js';
import PatientModel from '../models/PatientModel.js';

const patient = new Patient();

function getPatient(req, res) {
  const idNo = req.body.idNo;
  const fetchedPatient = patient.getPatient(idNo);
  if (!fetchedPatient) {
    res.status(204).json({
      error: 'patient not found',
    });
  }
  res.json(fetchedPatient);
}

async function registerPatient(req, res) {
  const patientRecord = req.body;
  if (
    !patientRecord.firstName ||
    !patientRecord.lastName ||
    !patientRecord.gender
  ) {
    return res.status(409).json({
      error: 'either firstname,lastname or gender is missing',
    });
  }
  //check if patient is already in database. if exists,send error response.if not...
  const foundPatient = await PatientModel.findOne({
    idNo: patientRecord.idNo,
  }).exec();
  if (foundPatient) {
    return res.status(409).json({
      error: 'patient is already registered',
    });
  }
  //create a genesis record
  const genesisRecord = patient.registerPatient(patientRecord);
  const genesisHash = genesisRecord.hash;
  console.log('hash from patient controller:', genesisHash);
  //create the patient in patients collection
  const createdPatient = await PatientModel.create({
    idNo: patientRecord.idNo,
    phoneNumber: patientRecord.phoneNumber && patientRecord.phoneNumber,
    firstName: patientRecord.firstName,
    lastName: patientRecord.lastName,
    location: patientRecord.location && patientRecord.location,
    email: patientRecord.email && patientRecord.email,
    gender: patientRecord.gender,
    nextOfKin: patientRecord.nextKin && patientRecord.nextKin,
    patientHash: genesisHash,
    records: [genesisHash],
  });
  console.log(createdPatient);
  res.status(200).json(genesisRecord);
}

export { registerPatient, getPatient };
