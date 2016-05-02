const getAngelListData = require('./angel_list');
const _ = require('underscore');

const filterAngelListData = title => {
  getAngelListData(data => {
    const filteredData = _.filter(JSON.parse(data).jobs, (job) => {
      return job.title === title;
    });

    console.log(filteredData);
    return filteredData;
  });
};

filterAngelListData('UI Engineer');
