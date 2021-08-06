import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App.jsx';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';
import BookStoreService from './services/bookstore-service';
import { BookStoreServiceProvider } from './components/BookStoreServiceContext/BookStoreServiceContext';

import store from './store';

const bookStoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookStoreServiceProvider value={bookStoreService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </BookStoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root'));