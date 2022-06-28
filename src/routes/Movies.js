import client from 'apollo'
import React, { useEffect, useState } from 'react'
import { gql } from '@apollo/client'

function Movies() {

  const [movies, setMovies] = useState([])

  //아폴로 클라이언트 접근
  //hook
  //const client = useApolloClient();

  //provider
  useEffect(() => {
    client.query({
      query: gql`
        {
          allMovies{
            title
          }
        }
      `
    }).then(data => setMovies(data.data.allMovies))
  }, [])


  return (
    <div>{movies.map(movie => <li key={movie.id}>{movie.title}</li>)}</div>
  )
}

export default Movies