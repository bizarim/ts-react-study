import React, { Component } from 'react';

// todo

interface Props {

}
interface State {
    number: number;
    color: string | undefined;
}

export default class LifeCycle extends Component<Props, State> {
    state = {
        number: 0,
        color: undefined,
    };

    myRef: Component | undefined = undefined;

    // tslint:disable-next-line:no-null-keyword
    public static getDerivedStateFromProps(props: {}, state: State): null { console.log('getDerivedStateFromProps', props, state); return null; }

    render() {
        return (
            <div>

            </div>
        );
    }
}
