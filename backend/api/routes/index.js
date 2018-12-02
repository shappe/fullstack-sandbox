'use strict';

const express = require('express');
const router = express.Router();

const todos = {
  '0000000001': {
    id: '0000000001',
    title: 'First List',
    todos: ['First todo of first list!'],
  },
  '0000000002': {
    id: '0000000002',
    title: 'Second List',
    todos: ['First todo of second list!'],
  },
};

router.get('/todolists', (req, res) => res.json(todos));

module.exports = router;
