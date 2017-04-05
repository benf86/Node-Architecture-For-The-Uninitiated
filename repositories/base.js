const _ = require('lodash');

module.exports = globals => modelName => ({
  get: params => query => body =>
    globals.db(`${modelName}s`)
    .where(params || query ? _.merge({}, params, query) : true),

  delete: params => query => body =>
    globals.db(`${modelName}s`)
    .where(params)
    .delete(),

  save: params => query => body =>
    (params.id
      ? globals.db(`${modelName}s`)
        .where(params)
        .update(_.merge(body, { updated_at: new Date().toUTCString() }))
      : globals.db(`${modelName}s`)
        .insert(body)),
});
