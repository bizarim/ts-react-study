import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props {

}

const Home: React.FC<RouteComponentProps<Props>> = ({ history }) => {
    return (
        <div>
            Home
            <br />
            <br />
            <button
                onClick={() => { history.push('/posts'); }}
            >버튼</button>
        </div>
    );
};

export default Home;
