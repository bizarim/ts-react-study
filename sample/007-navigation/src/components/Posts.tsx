import React from 'react';
import { Route, Link, RouteComponentProps } from 'react-router-dom';

interface MatchProps {
    title: string;
}

const Post: React.FC<RouteComponentProps<MatchProps>> = ({match}) => {
    return (
        <div>
            {match.params.title}
        </div>
    );
};


const Posts: React.FC = () => {
    return (
        <div>
            <h1>포스트</h1>
            <Link to='/posts/react'>React</Link>
            <Link to='/posts/redux'>Redux</Link>
            <Link to='/posts/relay'>Relay</Link>
            <Route path='/posts/:title' component={Post} />
        </div>
    );
};

export default Posts;
