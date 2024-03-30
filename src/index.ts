import 'dotenv/config';
import './db/connector/db';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schemas';
import resolvers from './resolvers';

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
 `);
}

startApolloServer();
