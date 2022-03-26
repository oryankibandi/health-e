import jwt from 'jsonwebtoken';
import 'dotenv/config';
import bcrypt from 'bcrypt';
import userRole from '../config/roles.js';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/User.js';

async function loginUser(req, res) {
  //1) check if username exists in DB
  //2) use bcrypt to compare the passwords
  //3) if match, generate access toke and refresh token
  //4) send refreshtoken in a cookie
  //5) send refreshtoken to DB
  const { email, password } = req.body;

  const foundUser = await User.findOne({ email: email });
  console.log('foundUser: ', foundUser);
  if (!foundUser) {
    return res.status(409).json({
      error: 'User not found',
    });
  }

  //check password
  const match = await bcrypt.compare(password, foundUser.password);

  console.log('match:', match);
  if (match === false) {
    return res.json({
      success: false,
      error: 'passwords do not match',
    });
  }
  //get user object from DB and extract roles then pass to access token
  const accessToken = jwt.sign(
    {
      userData: {
        username: foundUser.name,
        userId: foundUser.userId,
        email: foundUser.email,
        roles: foundUser.roles, //the role would be got from the DB
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '3600s' }
  );

  const refreshToken = jwt.sign(
    {
      userData: {
        username: foundUser.name,
        email: foundUser.email,
        roles: foundUser.roles,
      },
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d' }
  );

  //save refreshToken in DB
  await User.findOneAndUpdate(
    { email: foundUser.email },
    { refreshToken, refreshToken }
  );

  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: 'None',
    secure: true, //may change to true if frontend doesn't doo much
  });

  res.status(200).json({
    success: true,
    message: `Log in successful. Welcome ${foundUser.name}`,
    accessToken: accessToken,
  });
}

async function refreshToken(req, res) {
  const cookies = req.cookies;
  console.log('cookies: ', req.cookies);

  if (!cookies?.jwt) {
    return res.status(401).json({
      error: 'No cookies found',
    });
  }

  const refreshToken = cookies.jwt;
  //check DB for existing refreshToken
  const foundUser = await User.findOne({ refreshToken: refreshToken });
  if (!foundUser) {
    return res.status(403);
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    console.log('decoded', decoded);
    const decodedEmail = decoded.userData.email;
    if (err || foundUser.email !== decodedEmail) return res.status(403);
    //check if decoded email is same as email in DB associated with the refreshToken
    //if (err) return res.status(403).json({ error: err });
    const accessToken = jwt.sign(
      {
        userData: {
          username: decoded.userData.username,
          userId: decoded.userData.userId,
          email: decodedEmail,
          roles: decoded.userData.roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '900s' }
    );
    res.status(200).json({
      newAccessToken: accessToken,
    });
  });
}

async function logoutUser(req, res) {
  const cookies = req.cookies;
  console.log(cookies);
  if (!cookies?.jwt) {
    res.status(401).json({
      error: 'No cookies found',
    });
  }

  const refreshToken = cookies.jwt;

  //look for refreshToken in DB. If doesn't exist, clear cookies
  const foundUser = await User.findOne({ refreshToken: refreshToken }).exec();
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    return res.status(403);
  }

  //if found,delete from DB
  await User.findOneAndUpdate(
    { email: foundUser.email },
    { refreshToken: null }
  );

  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
  res.status(200).json({
    message: 'Logged out successfully',
  });
}

async function registerUser(req, res) {
  const {
    username,
    password,
    email,
    roles,
    phoneNumber,
    nationalId,
    nationality,
  } = req.body;
  if (!username || !password || !roles || !email) {
    return res.json({
      error: 'username and password required',
    });
  }

  // check db for existing username with credentials.If not...
  const duplicateName = await User.findOne({ name: username }).exec();
  const duplicateEmail = await User.findOne({ email: email }).exec();
  if (duplicateName || duplicateEmail) {
    return res.json({
      error: 'Username or email already exists',
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('hashedPassword:', hashedPassword);
  const newUser = await User.create({
    name: username,
    email: email,
    password: hashedPassword,
    phoneNumber: phoneNumber,
    nationalId: nationalId && nationalId,
    nationality: nationality && nationality,
    roles: [...roles],
    userId: uuidv4(),
  });
  res.status(200).json({
    success: true,
    newUserId: newUser.userId,
  });
}

export { loginUser, refreshToken, logoutUser, registerUser };
