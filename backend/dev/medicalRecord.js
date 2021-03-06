import { sha256 } from 'js-sha256';

class MedicalRecord {
  constructor() {
    this.medChain = [];
    this.pendingMedTransaction = [];
  }
  //this creates a new record with hash and record data provided
  createNewRecord(nonce, previousBlockHash, hash, recordData, lastRecord) {
    const newRecord = {
      date: Date.now(),
      recordData: recordData,
      nonce: nonce,
      previousBlockHash: previousBlockHash,
      hash: hash,
    };
    const valid = this.proofOfConcept(newRecord, lastRecord);
    console.log(valid);
    this.medChain.push(newRecord);

    return newRecord;
  }

  //creating the initial block after the patient has been registered
  //get the credentials and generate the hash with them
  createGenesisRecord(patientCredentials) {
    const nonce = this.getNonce('0', patientCredentials);
    console.log('nonce from genesis: ', nonce);
    const hash = this.generateHash(100, '0', patientCredentials);
    console.log('hash: ', hash);
    const genBlock = this.createNewRecord(100, '0', hash, patientCredentials);
    //sending gen record to DB

    console.log('genBlock: ', genBlock);
    return genBlock;
  }

  generateHash(nonce, previousRecordHash, patientCredentials) {
    const dataAsString =
      nonce.toString() +
      previousRecordHash +
      JSON.stringify(patientCredentials);
    const hash = sha256(dataAsString);

    return hash;
  }

  getNonce(previousRecordHash, patientCredentials) {
    let nonce = 1;
    let hash = this.generateHash(nonce, previousRecordHash, patientCredentials);

    while (hash.substring(0, 5) !== '00000') {
      nonce += 1;
      hash = this.generateHash(nonce, previousRecordHash, patientCredentials);
    }
    console.log('nonce=>', nonce);
    return nonce;
  }

  getLastBlock() {
    return this.medChain[this.medChain.length - 1];
  }

  proofOfConcept(currentRecord, lastRecord) {
    //check if hash begins with '00000'
    console.log('lastRecord in proofofconcept', lastRecord);
    let valid = false;
    const nonce = currentRecord.nonce;

    if (lastRecord) {
      console.log('last record exists');
      const hash = this.generateHash(
        nonce,
        lastRecord.hash,
        currentRecord.recordData
      );
      if (
        hash === currentRecord.hash &&
        currentRecord.hash.substring(0, 5) === '00000'
      ) {
        valid = true;
      }
    }
    return valid;
  }
}

export default MedicalRecord;
