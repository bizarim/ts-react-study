import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    userName: string;
}

const About: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
    return (
        <div>
            [{match.params.userName}] About
        </div>
    );
};

export default About;
