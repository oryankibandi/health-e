import bodyParser from 'body-parser';
import express from 'express';
import MedicalRecord from './medicalRecord.js';

const medRecord = new MedicalRecord();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  const chain = medRecord.medChain;
  res.json({
    chain: chain,
  });
});

app.post('/register-patient', function (req, res) {
  const patientRecord = req.body;
  //check if patient is already in database.if not...
  const genesisRecord = medRecord.createGenesisRecord(req.body);
  res.json(genesisRecord);
});

app.post('/post-record', function (req, res) {
  const consultaionRecord = req.body;
  const previousRecord = medRecord.getLastBlock();
  if (previousRecord) {
    const prevHash = previousRecord.hash;
    const nonce = medRecord.getNonce(prevHash, consultaionRecord);
    const hash = medRecord.generateHash(nonce, prevHash, consultaionRecord);
    const newRecord = medRecord.createNewRecord(
      nonce,
      prevHash,
      hash,
      consultaionRecord
    );
    res.json({
      message: 'New Record creates successfully',
      newRecord: newRecord,
    });
  } else {
    res.json({
      message: 'patient does not exist. Please register patient first',
    });
  }
});

app.listen('3000', function () {
  console.log('listening on port 3000');
});
