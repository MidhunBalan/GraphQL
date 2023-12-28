import express from 'express';
import { createSchema, createYoga } from 'graphql-yoga';

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String!
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'hello world',
    },
  },
});

const app = express();

const yoga = createYoga({
  schema,
});

// Bind GraphQL Yoga to the graphql endpoint to avoid rendering the playground on any path
app.use('/graphql', yoga);

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});
