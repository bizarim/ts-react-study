import React, { Component } from 'react';
import Test from './Test';

interface Props {

}
interface State {

}

export default class App extends Component<Props, State> {
    state = {};
    render() {
        return (
            <div>
                <Test test={1} />
                일정관리
            </div>
        );
    }
}
