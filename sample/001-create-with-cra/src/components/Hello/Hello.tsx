import React from 'react';

interface Props {
    msg: string;
}

const Hello: React.FC<Props> = ({ msg }) => {
    return (
        <h1>
            {msg}
        </h1>
    );
};

export default Hello;