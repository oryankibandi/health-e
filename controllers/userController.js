import jwt from 'jsonwebtoken';
import 'dotenv/config';

function loginUser(req, res) {
  //1) check if username exists in DB
  //2) use bcrypt to compare the passwords
  //3) if match, generate access toke and refresh token
  //4) send refreshtoken in a cookie
  //5) send refreshtoken to DB
  const { username, password } = req.body;

  const accessToken = jwt.sign(
    { username: username },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '900s' }
  );

  const refreshToken = jwt.sign(
    { username: username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d' }
  );

  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: 'None',
    secure: false, //may change to true if frontend doesn't doo much
  });

  res.status(200).json({
    message: 'logged in successfully',
    accessToken: accessToken,
  });
}

function refreshToken(req, res) {
  const cookies = req.cookies;
  console.log('cookies: ', req.cookies);

  if (!cookies?.jwt) {
    return res.status(401).json({
      error: 'No cookies found',
    });
  }

  const refreshToken = cookies.jwt;
  //check DB for existing refreshToken

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    //if (err || foundUser.username !== decoded.username) return res.status(403);
    //check if decoded username is same as username in DB associated with the refreshToken
    if (err) return res.status(403).json({ error: err });
    const accessToken = jwt.sign(
      { username: decoded.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '900s' }
    );
    res.status(200).json({
      accessToken: accessToken,
    });
  });
}

function logoutUser(req, res) {
  const cookies = req.cookies;
  console.log(cookies);
  if (!cookies?.jwt) {
    res.status(401).json({
      error: 'No cookies found',
    });
  }

  const refreshToken = cookies.jwt;

  //look for refreshToken in DB. If doesn't exist, clear cookies

  //if found,delete from DB

  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
  res.status(200).json({
    message: 'Logged out successfully',
  });
}

export { loginUser, refreshToken, logoutUser };
