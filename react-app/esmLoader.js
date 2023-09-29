const { readFileSync } = require('fs');
const { extname } = require('path');

const getExtension = (path) => extname(path).toLowerCase();

const esmLoader = (path) => {
  const ext = getExtension(path);

  if (ext === '.js' || ext === '.jsx') {
    return readFileSync(path, 'utf8');
  }

  return require(path);
};

module.exports = esmLoader;
