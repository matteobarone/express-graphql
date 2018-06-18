import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
const cors = require('cors');
// import mongoose from 'mongoose';

const app = express();
const PORT = 3000;
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/gql_db');

app.use(cors());
app.use('/graphql', graphqlHTTP({schema}));

app.get('/', (req, res) => {
  return res.json({
    msg: 'Hello, you are running express-graphql application'
  })
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
