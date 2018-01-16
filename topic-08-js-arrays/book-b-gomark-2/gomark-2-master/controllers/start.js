'use strict';

const logger = require('../utils/logger');

const start = {
  index(request, response) {
    logger.info('start rendering');
    const viewData = {
      title: 'Welcome to Gomark 1',
      description: 'This app enable you to manage your bookmarks. You can organise them into categories and share them with your friends and colleagues.',
    };
    response.render('start', viewData);
  },
};

module.exports = start;
