import React from 'react';
import '../index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../routes/index';
import PostsList from './PostsList/PostsList';
import PostDetails from './PostDetails/PostDetails.js';


const Root: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={routes.postsList} component={PostsList} />
            <Route exact path={routes.postDetails} component={PostDetails} />
        </Switch>
    </BrowserRouter>
);

export default Root;