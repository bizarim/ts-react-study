import React from 'react';
import PageTemplate from './components/pageTemplate';
import TodoInputContainer from './containers/todoInput/TodoInputContainer';
import TodoListContainer from './containers/todoList/TodoListContainer';

interface Props {

}

const App: React.FC<Props> = () => {
    return (
        <PageTemplate>
            <TodoInputContainer />
            <TodoListContainer />
        </PageTemplate>
    );
};

export default App;
