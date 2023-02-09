const express = require('express')
const {loadFilesSync} = require('@graphql-tools/load-files')
const {ApolloServer} = require('apollo-server-express')
const path = require('path')
const  {makeExecutableSchema} = require('@graphql-tools/schema')


const typesArray = loadFilesSync( '**/*', {
    extensions: ['graphql'],
})

const resolversArray = loadFilesSync('**/*', {
    extensions: ['resolvers.js']
})

async function startApolloServer() {
    const app = express();
    //Connect to our defined schemas and our resolvers
    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    })

  const server =  new ApolloServer ({
    schema
  })
  //Listen to graphql requests
  await server.start()
  //Allows Apollo to connect to our express app with an optional default path
  server.applyMiddleware({app, path: '/graphql'})
  app.listen(3000, ()=>{
  
      console.log('Running GraphQL server...')
  })
}

startApolloServer();