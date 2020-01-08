import React from 'react';

interface Props {
    onCreate: () => void;
    onRemove: () => void;
}

const Buttons: React.FC<Props> = ({ onCreate, onRemove }: Props) => {
    return (
        <div className='Buttons'>
            <div
                className='btn add'
                onClick={onCreate}
            >생성</div>
            <div
                className='btn remove'
                onClick={onRemove}
            >제거</div>
        </div>
    );
};

Buttons.defaultProps = {
    onCreate: () => console.warn('onCreate not defined'),
    onRemove: () => console.warn('onRemove not defined')
};

export default Buttons;
