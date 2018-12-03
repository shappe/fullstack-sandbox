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
        complete: false,
        deadline: Date.now(),
      },
      {
        description: 'Second todo of first list!',
        complete: true,
        deadline: Date.now() - 10,
      },
    ],
  },
  '0000000002': {
    id: '0000000002',
    title: 'Second List',
    todos: [
      {
        description: 'First todo of second list!',
        complete: true,
        deadline: Date.now() - 2,
      },
    ],
  },
};

router.get('/todolists', (req, res) => res.json(todos));

module.exports = router;
