// /index.js

const config = require('./config')();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

app.use(router);
const globals = {
  config,
  router,
};
require('./controllers/rest/router')(globals);

console.log(`Server listening on port ${config.infrastructure.port} in environment ${process.env.NODE_ENV} with config\n${JSON.stringify(config, 0, 2)}`);

app.listen(config.infrastructure.port);
