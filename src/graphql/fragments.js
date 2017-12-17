import gql from 'graphql-tag'

export const postFragment = gql`
  fragment PostData on postsConnection {
    edges {
      node {
        id
        title
        date
        slug
        featuredImage {
          sourceUrl
        }
      }
    }
  }
`

export const categoriesFragment = gql`
  fragment CategoryData on categoriesConnection {
    edges {
      node {
        id
        name
        slug
      }
    }
  }
`
