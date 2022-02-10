import express from 'express';
import { getRecord, postRecord } from '../controllers/recordController.js';

let router = express.Router();

router.route('/').get(getRecord);

router.route('/post-record').post(postRecord);

export default router;
