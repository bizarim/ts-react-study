import React from 'react';
import PageTemplate from './components/pageTemplate';
import TodoInputContainer from './containers/todoInput/TodoInputContainer';
import TodoListContainer from './containers/todoList/TodoListContainer';

const App: React.FC = () => {
    return (
        <PageTemplate>
            <TodoInputContainer />
            <TodoListContainer />
        </PageTemplate>
    );
};

export default App;
