import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Buttons from './button/Buttons';
import CounterListContainer from '../containers/CounterListContainer';
import { createCounter, removeCounter, CounterActionTypes } from '../actions/counter';
import getRandomColor from '../lib/getRandomColor';

interface Props {
    onCreate: () => void;
    onRemove: () => void;
}

const App: React.FC<Props> = ({ onCreate, onRemove }: Props) => {

    return (
        <div className='App'>
            <Buttons
                onCreate={onCreate}
                onRemove={onRemove}
            />
            <CounterListContainer />
        </div>
    );
};

const mapToDispatch = (dispatch: Dispatch<CounterActionTypes>) => ({
    onCreate: () => dispatch(createCounter(getRandomColor())),
    onRemove: () => dispatch(removeCounter())
});


export default connect(null, mapToDispatch)(App);
