import React from 'react'
import { gql, useQuery } from '@apollo/client'

//graphql query
const ALL_MOVIES = gql`
  query getMovies{
    allMovies{
      title
      id
    }
  }
  
`

function Movies() {

  //선언형 코드
  const { data, loading, error } = useQuery(ALL_MOVIES);

  //일반적으로 사용하는 것은 명령형 코드

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Could not fetch :( </h1>
  }

  return (
    <ul>
      <h1>Movies</h1>
      {data.allMovies.map(movie => {
        return <li key={movie.id}>{movie.title}</li>
      })}
    </ul>
  )
}

export default Movies