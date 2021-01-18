import gql from 'graphql-tag'

const auth_list = gql`
  query auth_list {
    auth_list {
      firstName,
      lastName,
      age,
      email,
      numBooksPublished,
      addressId
    }
  }
`
const add_auth = gql`
  mutation add_auth($input: newAuthor) {
    add_auth (input: $input) {
      firstName, 
      lastName,
      age,
      email,
      numBooksPublished, 
      addressId
    }
}`

export default { add_auth, auth_list }