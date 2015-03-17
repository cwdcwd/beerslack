'use strict';

var beerslack=require('../controllers/beerslack');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Beerslack, app, auth, database) {


  app.route('/beerslack/post')
    .post(beerslack.create);
};
