## Simple GraphQL Example with Express Js

Certainly! GraphQL Yoga is a fully-featured GraphQL server library that is based on Express.js. It allows you to create a GraphQL server with minimal setup. Here's a brief tutorial to get you started:

### **Setting Up GraphQL Yoga**

1.  **Initialize a Node.js project:**
    Start by creating a new directory for your project and initiate it with **`npm init -y`** to create a **`package.json`** file.
2.  **Install necessary packages:**
    Use npm or yarn to install **`graphql-yoga`** and other required dependencies:
    `npm i express graphql-yoga graphql`
3.  **Create your GraphQL server:**
    Create an **`index.js`** file in your project directory to set up your GraphQL server.
4.  **Code the GraphQL server:**
    In **`index.js`**, write the code to create a simple GraphQL server using GraphQL Yoga:

    ```
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

    ```

5.  **Start the server:**
    Before doing this, go to the package.json and add the below line
    **`"type": "module",`**
    Run your server using:
    `node index.js`
6.  **Testing your GraphQL server:**
    Once your server is running, visit **`http://localhost:4000`/graphql** in your browser or use tools like **GraphQL Playground** or **Insomnia** to interact with your GraphQL API.
