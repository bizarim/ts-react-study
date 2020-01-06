import React from 'react';

const style: React.CSSProperties = {
    border: '1px solid black',
    height: '300px',
    width: '300px',
    overflow: 'auto',
    position: 'relative',
};

const innerStyle: React.CSSProperties = {
    width: '100%',
    height: '650px',
    background: 'linear-gradient(white, black)',
};

export default class ScrollBox extends React.Component {
    private box: HTMLDivElement | undefined;

    public scrollToBottom = () => {
        if (undefined === this.box) return;
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        return (
            <div
                style={style}
                ref={(ref: HTMLDivElement) => { this.box = ref; }}>
                <div style={innerStyle} />
            </div >
        );
    }
}
