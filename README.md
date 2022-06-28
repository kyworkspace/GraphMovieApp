## GraphQL을 사용한 무비 앱
 - 서버로 사용한 레포지토리
 ```
 https://github.com/kyworkspace/qraphMovie.git
 ```

 

#### 선언형 코드 vs 명령형 코드
 - 코드실행을 단계적으로 진행하는 부분을 명령형이라고 볼 수 있다.

 ```
  const client = useApolloClient();
  client.query({
    query : gql`
        {
            allMovies ~~
        }
    `
  }).then(data=>console.log(data))
 ```

 - 위와 같이 client 를 hook으로 먼저 정의하고 다음으로 이어나가는 모습, 즉 선언부터 실행까지 모든 것을 작성하는 형태이다.

 - 선언형 코드의 경우는

 ```
 const {data,loading, ...} = useQuery
 ```

 - 위와 같이 사용자가 원하는 것을 먼저 선언하는 것이 특징이다.


 #### 변수를 넘겨서 데이터 받기
  - Movie에서 param으로 가져온 코드를 서버에 넘겨준다.

  ```
  const GET_MOVIE = gql`
    query getMovie($movieId : String!){
      movie(id:$movieId){
        id
        title
      }
    }
  `
  ```

  - 쿼리를 위와 같이 작성하고


  ```
    const { data, loading } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id
    }
  });

  ```

  - 위와 같이 쿼리를 호출할때 , 2번째 파라미터로 variable에 원하는 파라미터를 넣어준다.