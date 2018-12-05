'use strict';

const express = require('express');
const router = express.Router();

const todos = {
  '0000000001': {
    id: '0000000001',
    title: 'First List',
    todos: [
      {
        completed: false,
        description: 'First todo of first list!',
      },
      {
        completed: true,
        description: 'Second todo of first list!',
      },
    ],
  },
  '0000000002': {
    id: '0000000002',
    title: 'Second List',
    todos: [
      {
        completed: true,
        description: 'First todo of second list!',
      },
      {
        completed: false,
        description: 'Second todo of second list!',
      },
      {
        completed: true,
        description: 'Third todo of second list!',
      },
    ],
  },
};

router.get('/todolists', (req, res) => res.json(todos));

router.post('/todolists', (req, res) => {
  todos = req.body.toDoLists;
  console.log(todos);
  res.send('Todolist received');
});

module.exports = router;
