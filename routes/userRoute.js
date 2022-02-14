import express from 'express';
import {
  loginUser,
  refreshToken,
  logoutUser,
  registerUser,
} from '../controllers/userController.js';

let router = express.Router();

router.route('/login').post(loginUser);

router.route('/register').post(registerUser);

router.route('/logout').get(logoutUser);

router.route('/refresh').post(refreshToken);

export default router;
