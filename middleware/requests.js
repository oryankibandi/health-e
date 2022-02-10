import path from 'path';
import { writeFile, mkdir } from 'fs/promises';
import fs from 'fs';

const dirname = path.resolve();

async function getRequests(req, res, next) {
  const url = req.url;
  const method = req.method;
  const origin = req.headers.origin;

  const log = `url:${url} method: ${method} origin:${origin} \n`;

  console.log(log);

  const folderExists = fs.existsSync(path.join(dirname, 'logs'));

  if (!folderExists) {
    await mkdir(path.join(dirname, 'logs'));
  }

  await writeFile(path.join(dirname, 'logs', 'logs.txt'), log);
  next();
}

export default getRequests;
