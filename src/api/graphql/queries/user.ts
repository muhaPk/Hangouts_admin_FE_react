import { gql } from '@apollo/client';

export const GET_USER = gql`
query GetUser($id: Int) {
  user(id: $id) {
    id
    name
    surname
    email
    phone
    idPassport
  }
}
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      idPassport  
      name        
      surname     
      email       
      phone       
      isVerified  
      createdAt   
      updatedAt   
    }
  }
`;
