import React from 'react';
import Hello from '../hello/Hello';
import './App.css';
import Logo from '../logo/Logo';
// import Validation from '../validation/Validation';
// import { Counter } from '../counter/Counter';
// import EventPractice from '../eventPractice/EventPractice';
import ScrollBox from '../scrollBox/ScrollBox';
import Iteration from '../iteration/Iteration';

export default class App extends React.Component {
  private scrollBox: ScrollBox | undefined;

  render() {
    return (
      <>
        <div className='App'>
          <header className='App-header'>
            <Logo />
            <Hello msg={'hello world'} />
            <Iteration />
            {/* <Validation />
            <br />
            <ScrollBox ref={(ref: ScrollBox) => this.scrollBox = ref} />
            <button
              onClick={() => this.scrollBox?.scrollToBottom()}
            >to bottom</button> */}
          </header>
        </div>
      </>
    );
  }
}

