// HOC Для обёртки компонентов сервисом

import React from 'react';
import { BookStoreServiceConsumer } from '../BookStoreServiceContext/BookStoreServiceContext';

const withBookStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (bookStoreService) => {
                        return (<Wrapped {...props} bookStoreService={bookStoreService} />)
                    }
                }
            </BookStoreServiceConsumer>
        )
    }
};

export default withBookStoreService;