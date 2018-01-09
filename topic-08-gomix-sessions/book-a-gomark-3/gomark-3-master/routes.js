'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const bookmarklist = require('./controllers/bookmarklist.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.post('/dashboard/addbookmarklist', dashboard.addBookmarklist);
router.get('/dashboard/deletebookmarklist/:id', dashboard.deleteBookmarklist);

router.get('/about', about.index);
router.post('/addmessage', about.addMessage);

router.get('/bookmarklist/:id', bookmarklist.index);
router.get('/bookmarklist/:id/deletebookmark/:bookmarkid', bookmarklist.deleteBookmark);
router.post('/bookmarklist/:id/addbookmark', bookmarklist.addBookmark);

module.exports = router;
