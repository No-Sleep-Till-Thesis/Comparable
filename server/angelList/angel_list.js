const https = require('https');
const fs = require('fs');

const angelListToken = process.env.AngelList || require('../config/.secrets.json').angelList.access_token;

const dataAll = { jobs: [] };

const getAngelListData = pageNum => {
  https.get('https://api.angel.co/1/tags/1692/jobs?access_token=' + angelListToken + '&page=' + pageNum, (res) => {
    var currData = '';

    res.on('data', (data) => {
      currData += data;
    }).on('end', () => {
      currData = JSON.parse(currData);
      console.log(currData.page);
      chunkData(currData, currData.page);
    });

  }).on('error', (err) => {
    console.error(err);
  });
};

const chunkData = (currData, pageNum) => {
  dataAll.jobs = dataAll.jobs.concat(currData.jobs);

  if (pageNum === currData.last_page) {
    createDataFile(dataAll);
  } else {
    getAngelListData(pageNum + 1);
  }
};

const createDataFile = data => {
  fs.writeFile('angelList.json', JSON.stringify(data, null, 4), (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
  });
};

const retrieveDataFile = () => {
  fs.readFile('angelList.json', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
    return data;
  });
};

// Uncomment and run file with node to update data
// getAngelListData(1);

module.exports = retrieveDataFile;
