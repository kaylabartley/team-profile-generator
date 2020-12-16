const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
};

  const copyManagerImg = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/Manager.png', './dist/Manager.png', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Manager image created!'
        });
      });
    });
  };
  const copyEngineerImg = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/Engineer.png', './dist/Engineer.png', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Engineer image created!'
        });
      });
    });
  };

const copyInternImg = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/Intern.png', './dist/Intern.png', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Intern image created!'
      });
    });
  });
};

  module.exports = { writeFile, copyManagerImg, copyEngineerImg, copyInternImg };