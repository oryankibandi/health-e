import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { corsOptions } from '../config/corsOptions.js';
import MedicalRecord from './medicalRecord.js';
import Patient from './patient.js';
import patientRoute from '../routes/patientRoute.js';
import recordsRoute from '../routes/recordsRoute.js';
import credentials from '../middleware/credentials.js';
import userRoute from '../routes/userRoute.js';
import getRequests from '../middleware/requests.js';
import cookieParser from 'cookie-parser';
import verifyToken from '../middleware/verifyJWT.js';

const medRecord = new MedicalRecord();
const patient = new Patient();
const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(getRequests);
app.use(credentials);
app.use(cors(corsOptions));

app.use('/user', userRoute);
//verify access token middleware
app.use(verifyToken);

app.use('/patient', patientRoute);

app.use('/records', recordsRoute);

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
