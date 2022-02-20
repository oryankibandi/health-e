import MedicalRecord from './medicalRecord.js';

const medRecord = new MedicalRecord();

const consultationData = {
  clinic: 'i-med clinic',
  symptoms: ['headache', 'stomach-ache', 'Diarrhoea', 'Sweating'],
  testsDone: [
    {
      name: 'Bood Sample test',
      result: 'Found symptoms of malaria',
    },
    {
      name: 'Covid test',
      result: 'came out positive',
    },
  ],
  diagnosis: 'patient suffering from type 1 malaria',
  prescription: [
    {
      name: 'malaria drug1',
      type: 'tablets',
      method: '2 tablets twice a day',
    },
    {
      name: 'malaria drug2',
      type: 'syrup',
      method: '2 spoons twice a day',
    },
  ],
  nextAppointment: {
    date: '25-05-2022',
    time: '10:00',
  },
  medicalPersonnel: {
    id: 's5d1s3ds3',
    name: 'mike varshaski',
    email: 'mike@gmail.com',
    phoneNo: '0712654833',
  },
};
//Regestering a patient
const patientCredentials = {
  name: 'ian',
  idNo: '35589644',
  phoneNo: '0701726492',
  email: 'shreckoryan@gmail.com',
  gender: 'male',
};

medRecord.createGenesisRecord(patientCredentials);

//1) get previous block
//2) get nonce
//3) get hash
//4) create new block
const previousRecord = medRecord.getLastBlock();
const prevHash = previousRecord.hash;
const nonce = medRecord.getNonce(prevHash, consultationData);
const hash = medRecord.generateHash(nonce, prevHash, consultationData);
const newRecord = medRecord.createNewRecord(
  nonce,
  prevHash,
  hash,
  consultationData
);
console.log('new record:', newRecord);

console.log('MR: ', medRecord);

// const proofRecord = {
//   timestamp: 1643825969571,
//   recordData: consultationData,
//   nonce: 687590,
//   previousBlockHash:
//     '9801fe9a186fa6ab8a2a7cc649cd285173df1fa9bc97000b23a7282586382d04',
//   hash: '00000e89966a4f782c24c91a704d25e947ffcceb4133e6b832ac4c9d8509b192',
// };
