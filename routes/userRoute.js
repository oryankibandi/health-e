import express from 'express';
import {
  loginUser,
  refreshToken,
  logoutUser,
} from '../controllers/userController.js';

let router = express.Router();

router.route('/login').post(loginUser);

router.route('/logout').get(logoutUser);

router.route('/refresh').post(refreshToken);

export default router;
