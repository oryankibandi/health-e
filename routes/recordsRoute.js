import express from 'express';
import { getRecord, postRecord } from '../controllers/recordController.js';
import verifyUserRoles from '../middleware/verifyUserRoles.js';
import ROLES from '../config/roles.js';

let router = express.Router();

router.route('/').get(verifyUserRoles(ROLES.Doctor), getRecord);

router.route('/post-record').post(verifyUserRoles(ROLES.Admin), postRecord);

export default router;
