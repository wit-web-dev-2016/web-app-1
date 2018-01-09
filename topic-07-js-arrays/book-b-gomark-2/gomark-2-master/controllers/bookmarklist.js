'use strict';

const logger = require('../utils/logger');
const bookmarklistStore = require('../models/bookmarklist-store');

const bookmarklist = {
  index(request, response) {
    const bookmarklistId = request.params.id;
    logger.debug('Bookmark id = ', bookmarklistId);
    const viewData = {
      title: 'Bookmarks',
      bookmarklist: bookmarklistStore.getBookmarklist(bookmarklistId),
    };
    response.render('bookmarklist', viewData);
  },

  deleteBookmark(request, response) {
    const bookmarklistId = request.params.id;
    const bookmarkId = request.params.bookmarkid;
    logger.debug(`Deleting Bookamrk ${bookmarkId} from Bookamrklist ${bookmarklistId}`);
    bookmarklistStore.removeBookmark(bookmarklistId, bookmarkId);
    response.redirect('/bookmarklist/' + bookmarklistId);
  },

};

module.exports = bookmarklist;
