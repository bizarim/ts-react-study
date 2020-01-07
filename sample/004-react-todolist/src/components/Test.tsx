import React from 'react';

interface Props {
    test: number;
}

const Test: React.FC<Props> = (ov: Props) => {

    const [count, setCount] = React.useState<number>(ov.test);

    React.useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked {count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button
                onClick={() => setCount(count + 1)}
            >Click me</button>
        </div>
    );
};

export default Test;
