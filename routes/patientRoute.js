import express from 'express';
import {
  getPatient,
  registerPatient,
} from '../controllers/patientController.js';

let router = express.Router();

router.route('/').post(getPatient);

router.route('/register').post(registerPatient);

export default router;
