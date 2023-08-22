import { gql } from "@apollo/client";

export const IS_LOG = gql`
query IsLog{
  isLog @client
}`;
export const GET_NOTES = gql`
query NoteFeed($cursor: String) {
  noteFeed(cursor: $cursor) {
    notes {
      id
      createdAt
      content
      favoriteCount
      favoritedBy{
        id
      }
      author {
        id
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
      favorites{
        id
      }
      email
    }
  }
}
`;


export const GET_MY = gql`
query {
  me{
     id
    }
  }`;

export const GET_MY_NOTES = gql`
    query {
        me{ 
            notes{
                id
                createdAt
                content
                favoriteCount
                favoritedBy{
                  id
                }
                author {
                  id
                  username
                  avatar
                  email
                }
              }
          }
        }`;

export const GET_MY_FAVORITES_NOTE = gql`
    query {
        me{ 
          id
            favorites{
                id
                createdAt
                content
                favoriteCount
                favoritedBy{
                  id
                }
                author {
                  id
                  username
                  avatar
                  email
                }
              }
          }
        }`;
