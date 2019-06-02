import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
const cors = require( 'cors' );
import schema from './data/schema';

const GRAPHQL_PORT = 3000;

const graphQLServer = express();

graphQLServer.use(cors());

graphQLServer.use('/starwars', bodyParser.json(), graphqlExpress({
  schema: schema,
  routeValue: root,
  graphiql: true
}));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/starwars' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
