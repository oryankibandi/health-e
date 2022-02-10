import jwt from 'jsonwebtoken';
import 'dotenv/config';

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ error: 'accessToken not found' });
  console.log(authHeader);
  const accessToken = authHeader.split(' ')[1];
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'invalid token' });
    console.log('decoded: ', decoded);
    req.user = decoded.username;
    next();
  });
}

export default verifyToken;
