import React from 'react';
import Hello from '../Hello/Hello';
import { Counter } from '../Counter/Counter';

const App: React.FC = () => (
  <>
    <Hello msg={'hello world'} />
    <Counter />
  </>
);

export default App;
