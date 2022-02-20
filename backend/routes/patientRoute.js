import express from 'express';
import {
  getPatient,
  registerPatient,
} from '../controllers/patientController.js';
import verifyUserRoles from '../middleware/verifyUserRoles.js';
import ROLES from '../config/roles.js';

let router = express.Router();

router.route('/').post(getPatient);

router.route('/register').post(verifyUserRoles(ROLES.Doctor), registerPatient);

export default router;
