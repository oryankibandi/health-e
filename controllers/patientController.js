import Patient from '../dev/patient.js';

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

function registerPatient(req, res) {
  const patientRecord = req.body;
  //check if patient is already in database. if exists,send error response.if not...
  const genesisRecord = patient.registerPatient(req.body);
  res.status(200).json(genesisRecord);
}

export { registerPatient, getPatient };
