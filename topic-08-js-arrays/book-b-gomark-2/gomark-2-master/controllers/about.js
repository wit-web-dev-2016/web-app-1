'use strict';

const logger = require('../utils/logger');

const about = {
  index(request, response) {
    logger.info('about rendering');
    const viewData = {
      title: 'About Gomark 1',
      contact: 'Developed by GoMark Associates, WIT, Waterford.',
    };
    response.render('about', viewData);
  },
};

module.exports = about;
