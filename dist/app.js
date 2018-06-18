'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cors = require('cors');
// import mongoose from 'mongoose';

var app = (0, _express2.default)();
var PORT = 3000;
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/gql_db');

app.use(cors());
app.use('/graphql', (0, _expressGraphql2.default)({ schema: _schema2.default }));

app.get('/', function (req, res) {
  return res.json({
    msg: 'Hello, you are running express-graphql application'
  });
});

app.listen(PORT, function () {
  console.log('Server is running at PORT ' + PORT);
});
//# sourceMappingURL=app.js.map