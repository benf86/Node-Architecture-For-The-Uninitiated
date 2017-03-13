const Promise = require('bluebird');

let mockTodo = (id, body) => (Object.assign({
  id: `${id || Math.ceil(Math.random() * 1000)}`,
  type: 'todo',
  content: 'my random Todo',
}, body));

module.exports = globals => [
  {
    description: 'Get all todos',
    method: 'get',
    route: '/todo',
    cb: (params, query, body) => Promise.resolve([mockTodo(params.id), mockTodo(params.id + 1)]),
  },
  {
    description: 'Get a todo',
    method: 'get',
    route: '/todo/:id',
    cb: (params, query, body) => Promise.resolve([mockTodo(params.id)]),
  },
  {
    description: 'Create a todo',
    method: 'post',
    route: '/todo',
    cb: (params, query, body) => Promise.resolve([mockTodo(params.id, body)]),
  },
  {
    description: 'Modify a todo',
    method: 'put',
    route: '/todo/:id',
    cb: (params, query, body) => Promise.resolve([mockTodo(params.id, body)]),
  },
  {
    description: 'Delete a todo',
    method: 'delete',
    route: '/todo/:id',
    cb: (params, query, body) => Promise.resolve([1]),
  },
];
