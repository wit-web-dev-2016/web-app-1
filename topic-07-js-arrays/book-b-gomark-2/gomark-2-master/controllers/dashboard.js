'use strict';

const logger = require('../utils/logger');
const bookmarklistStore = require('../models/bookmarklist-store.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Template 1 Dashboard',
      bookmarklistCollection: bookmarklistStore.getBookmarkListCollection(),
    };
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;
