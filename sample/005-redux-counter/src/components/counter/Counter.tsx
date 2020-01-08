import React from 'react';
import './Counter.css';

interface Props {
    index: number;
    number: number;
    color: string;
    onIncrement: (index: number) => void;
    onDecrament: (index: number) => void;
    onSetColor: (index: number) => void;
}

const Counter: React.FC<Props> = ({ index, number, color, onIncrement, onDecrament, onSetColor }) => {
    return (
        <div
            className='Counter'
            onClick={() => onIncrement(index)}
            onContextMenu={(e) => { e.preventDefault(); onDecrament(index); }}
            onDoubleClick={() => onSetColor(index)}
            style={{ backgroundColor: color }}
        >{number}
        </div>
    );
};

export default Counter;
