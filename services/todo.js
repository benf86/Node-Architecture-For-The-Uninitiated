const baseServices = require('./base');

module.exports = (globals) => {
  const base = baseServices(globals)('todo');

  return Object.assign({}, base, {
    create: params => query => body =>
      globals.repositories.todo
      .save(params)(query)(body)
      .then(([id]) => base.get({ id })(query)(body)),
  });
};
