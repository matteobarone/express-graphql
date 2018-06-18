'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphqlTools = require('graphql-tools');

var _resolvers = require('./resolvers');

var typeDefs = '\ntype Product {\n    _id : ID\n    name: String!\n    qty: Int\n}\n type Query {\n     getProduct(_id: ID) : Product\n     allProducts: [Product]\n }\n';
exports.default = (0, _graphqlTools.makeExecutableSchema)({
    typeDefs: typeDefs,
    resolvers: _resolvers.resolvers
});
//# sourceMappingURL=schema.js.map