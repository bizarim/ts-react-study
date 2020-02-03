import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props {

}

const Search: React.FC<RouteComponentProps<Props>> = ({location}) => {
    return (
        <div>
            {new URLSearchParams(location.search).get('keyword')}:검색
        </div>
    );
};

export default Search;
