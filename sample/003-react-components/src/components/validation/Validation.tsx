import React, { Component } from 'react';
import './Validation.css';
interface Props {

}
interface State {
    password: string;
    clicked: boolean;
    validated: boolean;
}

export default class Validation extends Component<Props, State> {
    private stepInput: HTMLInputElement | undefined;
    state = {
        password: '',
        clicked: false,
        validated: false
    };
    private handleOnChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: e.target.value });
    };
    private handleOnClicked = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.stepInput?.focus();
    };

    render() {
        return (
            <div>
                <input ref={(ref: HTMLInputElement) => {this.stepInput = ref; }}
                    type='password'
                    value={this.state.password}
                    onChange={this.handleOnChanged}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleOnClicked}>검증하기</button>
            </div>
        );
    }
}
