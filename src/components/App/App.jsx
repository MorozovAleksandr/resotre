import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../Pages/HomePage';
import CardPage from '../Pages/CardPage';
import ShopHeader from '../ShopHeader/ShopHeader.js';

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={10} />
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/cardpage' component={CardPage} />
            </Switch>
        </main>
    )
}

export default App;