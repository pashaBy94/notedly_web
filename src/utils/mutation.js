import { gql } from "@apollo/client";

export const SIGN_UP = gql`
mutation SignUp($username: String!, $email: String!, $password: String!) {
  signUp(username: $username, email: $email, password: $password)
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
      favorites{
        id
      }
    }
  }
}
`;
export const SIGN_IN = gql`
mutation SignIn($username:String! $email:String! $password:String!) {
  signIn(username: $username, email: $email, password: $password )
}`;
export const EDIT_NOTE = gql`
mutation UpdateNote($id: ID!, $content: String!){
  updateNote(id: $id, content: $content){
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
      favorites{
        id
      }
    }
  }
}`;
export const DELETE_NOTE = gql`
mutation DeleteNote($id: ID!){
  deleteNote(id: $id)
}`;
export const TOGGLE_FAVORITE = gql`
mutation ToggleFavorite($id: ID!){
  toggleFavorite(id: $id){
    id
    content
    favoriteCount
    author{
      id
      username
    }
  }
}`;