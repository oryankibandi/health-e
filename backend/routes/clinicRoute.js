import express from 'express';
import registerClinic from '../controllers/clinicController.js';
import verifyUserRoles from '../middleware/verifyUserRoles.js';
import ROLES from '../config/roles.js';

let router = express.Router();

router.route('/register').post(verifyUserRoles(ROLES.Admin), registerClinic);

export default router;
