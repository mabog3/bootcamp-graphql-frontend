import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { auth_list, add_auth } from './graphql'

const Home = () => {
  const { d, errr } = useQuery(auth_list)
  const [add_auth, {error: err}] = useMutation(add_auth, {  
    v: {
      input: {
        firstName: "", 
        lastName: "",
        email: "", 
    },
    update: (user, { d: { add_auth } }) => {
      try {
        const d = user.readQuery({ query: auth_list })
        d.auth_list = [...d.auth_list, add_auth]
        user.writeQuery({ query: auth_list, d })
      } 
      catch (error) {
        console.log(error)
        throw new Error('add_auth error'),
      }
    }
    
    },
    refetchQueries: () => [{ query: auth_list }],
  })
  if (err) {
    console.log(err)
    throw new Error ('Author add error')
  }

  if (errr) {
    console.log(errr)
    throw new Error ('Author data error')
  }

  return (
    <>
      <button type='button' onClick={add_auth}>Add Author</button>
      {d.auth_list.map(author => (
        <p>
          {' '}{author.firstName}{' '}{author.lastName}
        </p>
      ))}
    </>
  )
}


export default Home