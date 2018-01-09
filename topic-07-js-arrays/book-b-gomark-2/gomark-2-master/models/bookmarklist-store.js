'use strict';

const _ = require('lodash');

const bookmarklistCollection = require('./bookmarklist-store.json').bookmarklistCollection;

const bookmarklistStore = {

  bookmarklistCollection: require('./bookmarklist-store.json').bookmarklistCollection,

  getBookmarkListCollection() {
    return this.bookmarklistCollection;
  },

  getBookmarklist(id) {
    return _.find(this.bookmarklistCollection, { id: id });
  },

  removeBookmark(id, bookmarkId) {
    const bookmarklist = this.getBookmarklist(id);
    _.remove(bookmarklist.bookmarks, { id: bookmarkId });
  },
};

module.exports = bookmarklistStore;
