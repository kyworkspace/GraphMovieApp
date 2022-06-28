import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


//아폴로 클라이언트 설정
const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
})

export default client;