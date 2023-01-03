
import './App.css';
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'
import ShowData from './ShowData';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:"http://localhost:4000/graphql"
  });
  return (<ApolloProvider client={client}> 
    <div className="App">
    <h1> List of users</h1>
    <ShowData />
    </div>
    </ApolloProvider>
  );
}

export default App;
