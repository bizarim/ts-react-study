import React from 'react';
import Counter from '../counter/Counter';
import { CounterState } from '../../reducers/counter';
import './CounterList.css';

interface Props {
    counters: CounterState;
    onIncrement: (index: number) => void;
    onDecrement: (index: number) => void;
    onSetColor: (index: number) => void;
}

const CounterList: React.FC<Props> = ({ counters, onIncrement, onDecrement, onSetColor }: Props) => {
    const list = counters.map(
        (counter, i) => (
            <Counter
                key={i}
                index={i}
                number={counter.number}
                color={counter.color}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
            />
        )
    );

    return (
        <div className='CounterList'>
            {list}
        </div>
    );
};

export default CounterList;
