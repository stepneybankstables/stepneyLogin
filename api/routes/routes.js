'use strict';
module.exports = function(app) {
  const logins = require('../controllers/controller');

  app.route('/logins')
    .get(logins.getLogins)
    .post(logins.createLogin);
};
