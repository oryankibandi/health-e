import MedicalRecord from '../dev/medicalRecord.js';
import PatientModel from '../models/PatientModel.js';
import MedicalRecordModel from '../models/medicalRecordModel.js';

const medRecord = new MedicalRecord();

async function getRecord(req, res) {
  const userId = req.userId;
  const patientIdNo = req.body.patientIdNo;
  //const chain = medRecord.medChain;

  //get record from DB
  const foundPatient = await PatientModel.findOne({ idNo: patientIdNo }).exec();
  const genesisHash = foundPatient.patientHash;
  const foundRecords = await MedicalRecordModel.findOne({
    genHash: genesisHash,
  }).exec();
  res.json({
    records: foundRecords.records,
  });
}

async function getLastRecord(genesisHash) {
  //get the genesis block by using hash in patient collection to find
  const records = await MedicalRecordModel.findOne({
    genHash: genesisHash,
  }).exec();
  console.log('found MR', records.records);
  const sortedRecord = records.records.sort((a, b) => b.date - a.date)[0];
  console.log('sortedRecord', sortedRecord);
  //loop through records.records and find one where previousHash==0
  // const correctBlock = records.find(
  //   (value) => value.records.previousHash === '0'
  // );

  return sortedRecord;
}

async function updateRecord(genesisHash, formattedRecord) {
  //this function updates records in database
  const records = await MedicalRecordModel.findOne({
    genHash: genesisHash,
  }).exec();
  const previousRecords = records.records;
  console.log('update record record=>', records);

  const updatedRecord = await MedicalRecordModel.findOneAndUpdate(
    { genHash: genesisHash },
    { records: [...previousRecords, formattedRecord] }
  ).catch((err) => console.log('sth went wrong:', err));
  return updatedRecord;
}

async function postRecord(req, res) {
  //prev record will be fetched from DB

  const consultaionRecord = req.body;
  const patientIdNo = consultaionRecord.patientIdNo;
  const foundPatient = await PatientModel.findOne({ idNo: patientIdNo }).exec();

  if (!foundPatient) {
    return res.status(404).json({
      error: 'Patient not found',
    });
  }

  console.log('found patient for posting record', foundPatient);
  const genesisHash = foundPatient.patientHash;

  const lastRecord = await getLastRecord(genesisHash);
  console.log('Last Record hash', lastRecord.hash);

  //Generate new record
  const prevHash = lastRecord.hash;
  const nonce = medRecord.getNonce(prevHash, consultaionRecord.record);
  const hash = medRecord.generateHash(
    nonce,
    prevHash,
    consultaionRecord.record
  );
  const newRecord = medRecord.createNewRecord(
    nonce,
    prevHash,
    hash,
    consultaionRecord.record,
    lastRecord
  );
  console.log('newRecord--', newRecord);
  //format the record to match the schema
  const formattedRecord = {
    patientIdNo: patientIdNo,
    clinic: 'I-med Clinic',
    doctor: req.userId,
    hash: hash,
    nonce: nonce,
    previousHash: newRecord.previousBlockHash,
    record: newRecord.recordData,
    date: new Date(),
  };
  console.log('formattedRecord =>', formattedRecord);
  const updatedRecord = await updateRecord(genesisHash, formattedRecord);

  res.json({
    updateRecord: updatedRecord,
  });
}

export { getRecord, postRecord };
