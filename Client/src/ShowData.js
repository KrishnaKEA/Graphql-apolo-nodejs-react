import React from 'react'
import { useQuery, gql } from '@apollo/client'
const QUERY_ALL_USERS = gql`
query GetAllUsers {
users {
    id
    name
    age   
    username
   
  }
}
`
const QUERY_ALL_MOVIES = gql`
query GetMovies {
movies {
    id
    name
    yearOfPublication
    isInTheaters
   
  }
}
`

const ShowData = () => {
const {data: movieData,loading,error} = useQuery(QUERY_ALL_MOVIES);





    const {data: userData,loading,error} = useQuery(QUERY_ALL_USERS)
    if(loading){
        return <h2>Loading ......</h2>
    }
    if(userData){
       console.log(userData) ;
    }
  return (
    <div>{userData.users && userData.users.map((d)=>{
        return(
           <div>
            <h1>Name: {d.name}</h1>
            <h2>Username: {d.username}</h2>
            <h2>Age: {d.age}</h2>
           </div> 
        )
    })
    }
    
    </div>
  )
}

export default ShowData