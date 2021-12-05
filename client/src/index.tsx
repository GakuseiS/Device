import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
})

ReactDOM.render(
<ApolloProvider client={client} ><App /></ApolloProvider>, 
document.getElementById('root'));


