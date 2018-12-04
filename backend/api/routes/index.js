'use strict';

const express = require('express');
const router = express.Router();

const todos = {
  '0000000001': {
    id: '0000000001',
    title: 'First List',
    todos: [
      {
        description: 'First todo of first list!',
        completed: false,
      },
      {
        description: 'Second todo of first list!',
        completed: true,
      },
    ],
  },
  '0000000002': {
    id: '0000000002',
    title: 'Second List',
    todos: [
      {
        description: 'First todo of second list!',
        completed: true,
      },
      {
        description: 'Second todo of second list!',
        completed: false,
      },
      {
        description: 'Third todo of second list!',
        completed: true,
      },
    ],
  },
};

router.get('/todolists', (req, res) => res.json(todos));

module.exports = router;
