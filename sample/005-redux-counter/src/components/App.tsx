import React from 'react';
import Counter from './counter/Counter';

interface Props {

}

const App: React.FC<Props> = () => {
    return (
        <div>
            <Counter
                index={1}
                color={'black'}
                number={1}
                onIncrement={() => { alert('onIncrement'); }}
                onDecrament={() => { alert('onDecrament'); }}
                onSetColor={() => { alert('onSetColor'); }}
            />
        </div>
    );
};

export default App;
