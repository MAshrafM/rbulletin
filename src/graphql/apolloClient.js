import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://jesseweigel.com/graphql'
  }),
  cache: new InMemoryCache()
})

export default client
