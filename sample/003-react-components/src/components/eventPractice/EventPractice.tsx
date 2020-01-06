import React, { Component } from 'react';

interface Props {

}
interface State {
    message: string;
    userName: string;
}

export default class EventPractice extends Component<Props, State> {
    state = {
        message: '',
        userName: ''
    };

    render() {
        return (
            <div>
                <h1>
                    <input
                        type='text'
                        name='userName'
                        placeholder='유저이름'
                        value={this.state.userName}
                        onChange={this.handleUserNameOnChanged}
                    />
                    <input
                        type='text'
                        name='message'
                        placeholder='아무거나 입력'
                        value={this.state.message}
                        onChange={this.handleMessageOnChanged}
                    />
                    <button onClick={this.handleOnClicked}>확인</button>
                </h1>
            </div>
        );
    }
    private handleUserNameOnChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ userName: e.target.value });
    }
    private handleMessageOnChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ message: e.target.value });
    }
    private handleOnClicked = () => {
        alert(this.state.userName + ' : ' + this.state.message);
        this.setState({ message: '', userName: '' });
    };
}