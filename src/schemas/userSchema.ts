import gql from 'graphql-tag';

export const userSchema = gql`
  type User {
    id: ID!
    email: String!
  }
  type Query {
    getUserById(id: ID!): User!
  }
  type Mutation {
    createUser(email: String!): User!
  }
`;
