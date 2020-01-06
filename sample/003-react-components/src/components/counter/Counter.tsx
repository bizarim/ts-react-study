import React, { Component } from 'react';
import './Counter.css';
export interface CounterProps {

}

export interface CounterState {
    value: number;
}

export class Counter extends Component<CounterProps, CounterState> {
    readonly state: CounterState = { value: 0 };

    public render() {
        return (
            <div className='Counter'>
                Counter:&nbsp;[{this.state.value}]
                <br />
                <br />
                <button onClick={this.handleInc}>증가</button>
                <button onClick={this.handleDec}>감소</button>
            </div>
        );
    }

    private handleInc = () => this.setState({ value: this.state.value + 1 });
    private handleDec = () => this.setState({ value: this.state.value - 1 });
}