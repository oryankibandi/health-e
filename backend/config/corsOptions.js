const whitelist = [
  'https://www.google.com',
  'http://localhost:3000',
  'undefined',
];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

export { whitelist, corsOptions };
