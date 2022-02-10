import MedicalRecord from '../dev/medicalRecord.js';

const medRecord = new MedicalRecord();

function getRecord(req, res) {
  const chain = medRecord.medChain;
  res.json({
    chain: chain,
  });
}

function postRecord(req, res) {
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
}

export { getRecord, postRecord };
