import React from 'react';
import './Counter.css';

interface Props {
    index: number;
    number: number;
    color: string;
    onIncrement: (index: number) => void;
    onDecrement: (index: number) => void;
    onSetColor: (index: number) => void;
}

const Counter: React.FC<Props> = ({ index, number, color, onIncrement, onDecrement, onSetColor }: Props) => {
    return (
        <div
            className='Counter'
            onClick={() => onIncrement(index)}
            onContextMenu={(e) => { e.preventDefault(); onDecrement(index); }}
            onDoubleClick={() => onSetColor(index)}
            style={{ backgroundColor: color }}
        >{number}
        </div>
    );
};

Counter.defaultProps = {
    index: 0,
    number: 0,
    color: 'black',
    onIncrement: (index: number) => console.warn('onIncrement not defined'),
    onDecrement: (index: number) => console.warn('onDecrement not defined'),
    onSetColor: (index: number) => console.warn('onSetColor not defined')
};

export default Counter;
