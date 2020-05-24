import * as fs from 'fs';
import * as path from 'path';

function getConfig(): config.RootObject {
  try {
    let name = 'config.json';
    let filePath = path.resolve(__dirname, '..', '..');
    if (process.env['NODE_ENV'] === 'development') {
      name = 'dev.json';
      filePath = path.resolve(__dirname, '..');
    }

    filePath = path.join(filePath, name);
    const file = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(file);
  } catch (e) {
    console.log('load config error');
    process.exit(-1);
  }
}

export {getConfig};
