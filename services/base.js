module.exports = globals => serviceName => ({
  service: serviceName,
  get: params => query => body =>
    globals.repositories[serviceName].get(params)(query)(body),

  create: params => query => body =>
    globals.repositories[serviceName].save(params)(query)(body),

  update: params => query => body =>
    globals.repositories[serviceName].save(params)(query)(body),

  delete: params => query => body => globals.repositories[serviceName].delete(params)(query)(body),
});
