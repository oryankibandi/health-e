import { whitelist } from '../config/corsOptions.js';

function credentials(req, res, next) {
  const origin = req.headers.origin;

  if (whitelist.includes(origin)) {
    //TODO: Fix this-!whitelist
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log('header set');
  }

  next();
}

export default credentials;
