const Promise = require('bluebird');

const mockTodo = (id, body) => (Object.assign({
  id: `${id || Math.ceil(Math.random() * 1000)}`,
  type: 'todo',
  content: 'my random Todo',
}, body));

module.exports = () => ({
  get: ({ id }) => query => body => (!id
      ? Promise.resolve([mockTodo(id), mockTodo(id + 1)])
      : Promise.resolve([mockTodo(id)])),

  save: ({ id }) => query => body  => Promise.resolve([1]),

  delete: params => query => body => Promise.resolve([1]),
});
