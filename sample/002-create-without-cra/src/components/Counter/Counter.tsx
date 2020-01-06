import React, { Component } from 'react';

export interface CounterProps {

}

export interface CounterState {
    value: number;
}

export class Counter extends Component<CounterProps, CounterState> {
    readonly state: CounterState = { value: 0 };

    public render() {
        return (
            <>
                <div>{this.state.value}</div>
                <button onClick={this.handleIncrement}>증가</button>
                <br/>
                <button onClick={this.handleDecrement}>감소</button>
            </>
        );
    }

    private handleIncrement = () => this.setState({ value: this.state.value + 1 });
    private handleDecrement = () => this.setState({ value: this.state.value - 1 });
}