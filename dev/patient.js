import MedicalRecord from './medicalRecord.js';

const medRecord = new MedicalRecord();

class Patient {
  constructor() {
    (this.name = ''),
      (this.idNo = ''),
      (this.phoneNo = ''),
      (this.email = ''),
      (this.gender = ''),
      (this.patientHash = '');
  }

  registerPatient({ firstName, lastName, idNo, phoneNo, email, gender }) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.idNo = idNo),
      (this.phoneNo = phoneNo),
      (this.email = email),
      (this.gender = gender);

    const genBlock = medRecord.createGenesisRecord({
      firstName: firstName,
      lastName: lastName,
      idNo: idNo,
      phoneNo: phoneNo,
      email: email,
      gender: gender,
    });
    //send data to patient collection in DB with doc name as the hash of patient's gen block

    this.patientHash = genBlock.hash;

    return genBlock;
  }

  getPatient(idNo) {
    //get data from patients' collection in DB
    //assign the object properties to the class constructors
    //TODO: get hash once DB is added
    (this.name = 'brian'), //TODO: firstname lastname
      (this.idNo = '35589644'),
      (this.phoneNo = '0701724629'),
      (this.email = 'shreckoryan@gmail.com'),
      (this.gender = 'male');

    const fetchedPatient = {
      name: 'brian',
      idNo: '35589644',
      phoneNo: '0701726492',
      email: 'shreckoryan@gmail.com',
      gender: 'male',
    };
    return fetchedPatient;
  }
}

export default Patient;
