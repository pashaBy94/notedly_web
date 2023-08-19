import { gql } from "@apollo/client";
export const SIGN_UP = gql`
mutation SignUp($username: String!, $email: String!, $password: String!) {
  signUp(username: $username, email: $email, password: $password)
}
`;
export const IS_LOG = gql`
query IsLog{
  isLog
}`;
export const GET_NOTES = gql`
query NoteFeed($cursor: String) {
  noteFeed(cursor: $cursor) {
    notes {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        avatar
        email
      }
    }
    cursor
    hasNextPage
  }
}
`;
export const GET_NOTE = gql`
query getNote($id: ID!) {
  note(id: $id) {
    id
    createdAt
    updatedAt
    content
    favoriteCount
    author {
      id
      username
      avatar
      email
    }
  }
}
`;

export const NEW_NOTE = gql`
mutation NewNote($content: String!) {
  newNote(content: $content) {
    id
    createdAt
    updatedAt
    content
    favoriteCount
    author {
      id
      username
      avatar
      email
    }
  }
}
`;
export const SIGN_IN = gql`
mutation SignIn($username:String! $email:String! $password:String!) {
  signIn(username: $username, email: $email, password: $password )
}`;

export const GET_MY = gql`
query {
  me{
     id
    }
  }`;

export const GET_MY_FAVORITES_NAMES = gql`
    query {
        me{ 
            notes{
                id
                createdAt
                content
                favoriteCount
                author {
                  username
                  avatar
                  email
                }
              }
            favorites{
                id
                createdAt
                content
                favoriteCount
                author {
                  username
                  avatar
                  email
                }
              }
          }
        }`;