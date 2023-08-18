import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Nav from './components/NavC';
import Footer from './components/FooterC';
import React from 'react';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Nav />
            <Outlet />
            <Footer />
        </ApolloProvider>
    );
}

export default App;
