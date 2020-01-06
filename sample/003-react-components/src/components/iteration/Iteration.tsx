import React, { Component } from 'react';

interface Props {

}
interface State {
    names: Array<string>;
    name: string;
}

export default class Iteration extends Component<Props, State> {
    state = {
        names: ['땅', '불', '바람', '물', '마음'],
        name: ''
    };
    private handleOnChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.target.value
        });
    }
    private handleInsert = () => {
        if (this.state.name === '') return;
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
    }

    private handleRemove = (index: number) => {
        const { names } = this.state;
        this.setState({
            names: names.slice(0, index).concat(names.splice(index + 1, names.length)) /* names.filter((item, i) => i !== index) */,
            name: ''
        });
    }
    render() {
        const nameList = this.state.names.map(
            (name, index) => (
                <li
                    key={index}
                    onDoubleClick={() => this.handleRemove(index)}
                >{name}</li>
            )
        );
        return (
            <div>
                <input
                    onChange={this.handleOnChanged}
                    value={this.state.name}
                />
                <button
                    onClick={this.handleInsert}
                >추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}


/*
<li>땅</li>
<li>불</li>
<li>바람</li>
<li>물</li>
<li>마음</li>
*/