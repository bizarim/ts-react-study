## 페이스북은 왜 리액트를 만들게 되었나 ?
리액트는 페이스북에서 제공해주는 프론트엔드 라이브러리입니다.
페이스북이 리액트를 만들기 전에도, 이미 AngularJS, Backbone.js, Knockout.js, Ember.js 등의 수많은 프레임워크들이 존재했습니다.
위 프레임워크들은 MVC패턴 또는 MVVM(View Model) 등의 패턴으로 애플리케이션을 구조화하고 있습니다.

모델 뷰-ViewModel 패턴(https://docs.microsoft.com/ko-kr)
즉, 이벤트가 발생했을 때 모델(Model)에서 데이터를 처리하여 그 정보를 바탕으로 화면을 담당하는 뷰(View)를 변화시켜줍니다. 이 과정은 간단해 보이지만, 애플리케이션 규모가 크면 상당히 복잡하고 성능도 떨어집니다. 여기서 페이스북 개발팀이 생각한 아이디어는, 데이터가 변할 때마다 어떤 변화를 줄지를 고민하는 것이 아니라
“기존 뷰(View)를 날려 버리고 Virtual DOM을 사용하여 처음부터 새로 렌더링” 하는 방식으로 좀 더 빠른 속도로 뷰(View) 를 변경시켜주게 됩니다.

## 리액트의 장점
Virtual DOM 사용으로 인해 속도가 빠릅니다.
페이스북이 리액트를 발표할 때 사용한 캐치프레이즈, 자바스크립트와 리액트의 간단한 개념만 알면 웹, 앱이 모두 개발 가능합니다.
리액트는 자바스크립트 친화적이며, 불변성 관리에 초점을 두고 있는 도구입니다.
이미 많은 회사들(넷플릭스, 에어비엔비 및 국내 다양한 업체)이 사용하고 있기 때문에 다양한 라이브러리가 존재하고, 질문과 답변이 활발하게 이루어집니다.
## 리액트의 특징
1. 컴포넌트(Component) 구조
리액트는 모든 것이 컴포넌트입니다. 컴포넌트는 레고 블록과 같이 작은 단위로 만들어서 그것들을 조립하듯이 개발할 수 있게 해주기 때문에 캡슐화, 확장성, 결합성, 재사용성 등과 같은 이점이 있습니다.
2. 단방향 데이터 흐름
리액트에서는 부모 컴포넌트와 자식 컴포넌트간에 데이터를 전달할수 있는데, 데이터를 전달할 때 부모에서 자식에게로만 데이터가 전달이 가능합니다.

3. ECMAScript 6
리액트 개발에서는 ES6문법을 사용하고있습니다.
let
기존의 var를 대체 할수 있는 키워드입니다. 기존의 var는 선언문의 생략, 중복된 변수명 선언, 함수 블록에서의 스코프 설정, 함수 호이스팅 등으로 개발에 혼란을 주고 가독성이 떨어지기 때문에 ES6에서는 var를 지양하고 있습니다.
함수가 아닌 블록에서의 var 스코프 설정
```
var a = 100;
if(a > 0){
    var a = 200;
    console.log(a); // 200출력
}
console.log(a); // 200 출력
```
위 예시를 let으로 변경했을 경우 ⇒ 함수 이외의 블록에서도 스코프 설정이 가능해집니다.
```
let a = 100;
if(a > 0){
    let a = 200;
    console.log(a); // 200출력
}
console.log(a); // 100 출력
```
const
변경할 수 없는 변수로, 값을 재할당 할 필요가 없는 경우 사용합니다. 변수와 달리 선언 시에 반드시 초기값을 할당해줘야 하며, 스코프 범위는 let과 동일하게 블록 레벨입니다.
const MY_NAME; // 초기값 할당하지 않아 SyntaxError발생
const MY_NAME = 'Kim';
MY_NAME = 'Lee'; // 값을 변경하려 하면 TypeError발생
화살표 함수(Arrow function)
함수표기 구문을 화살표 => 로 하여 구문을 짧게 줄여줍니다.
```
// 기존 함수 구문
var add = function(a, b){
    return a + b;
};
// 화살표 함수 구문
let add = (a, b) => {
    return a + b;
}
```
블록 구문 {}을 생략한 표현식 사용은 가능 하지만 이 경우 return은 사용 불가능합니다.
```
// 블록 구문 사용
let add = (a, b) => {
   console.log(a + b);
}
// 블록 구문 생략
let add = (a, b) => console.log(a + b);
```
단일 인자만 넘겨받는 경우 {}괄호 생략도 가능합니다.
```
// 괄호 사용
let print = (message) => document.write(message);
// 괄호 생략
let print = message => document.write(message);
```
펼침 연산자(spread operator)
... 을 사용하는 연산자로 배열 또는 객체의 모든 값을 복사할 수 있습니다.
```
let a = [1,2,3]
let b = a
b.push(4);
console.log(a)//[1,2,3,4]
console.log(b)//[1,2,3,4]
```
위 예시처럼 배열의 모든 데이터가 교체되는 일을 리소스를 방지하기 위해 나온 문법이 펼침 연산자로, 데이터 불변성과 관련있습니다.
```
let a = [1,2,3]
let b = [...a, 4]
console.log(a) //[1,2,3]
console.log(b) //[1,2,3,4]
```
클래스 (class)
class를 사용하여 Prototype을 사용하지 않고도 간단하게 상속을 사용할 수 있게 되었습니다.
```
// class키워드 뒤에 클래스명 붙여 선언하고 블록 안쪽에 구문 작성
class Display {
}
const display = new Display();
```
상속
ES6에서는 extends키워드를 사용하여 보다 쉽게 상속을 구현할 수 있는데, 말 그대로 부모(상위) 클래스의 속성이나 기능을 자식에게 전달한다는 의미입니다.
```
class Display{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
/* 
선언된 Display 클래스를 React클래스 선언문 뒤에 Extends를 붙여 
Display클래스를 상속 받고 있습니다.
*/
class React extends Display{
    constructor(x, y, width, height){
/*
부모클래스의 생성자로 자식클래스에서 생성자 호출 시 부모 클래스가 초기화 되도록 강제적으로 super를 호출됩니다.
*/
        super(x, y);  
        this.width = width;
        this.height = height;
    }
}
```

알아두어야 할 개념
1. JSX문법
리액트에서는 JSX문법을 사용하는데, 이는 페이스북에서 만든 것으로 HTML과 비슷하게 생기고 비슷하게 사용하지만 전혀 다른 문법입니다.
JSX에서는 꼭 지켜야할 규칙들이 몇가지 있습니다.

1.1. 닫혀야 하는 태그
```
import React, { Component } from 'react';
class App extends Component {
 render() {
   return (
    <div>
      <p>Hello world</p> // 정상작동
      <input type='text' /> // 정상작동
    </div>
   );
 }
}
export default App;
```

1.2. 감싸져 있는 엘리먼트
두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져있어야 합니다.
[div 로 해결한 경우]
```
import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>
        <p> Hello world </p>
        <p> Have a Nice day </p>
      <div>
    );
  }
}
export default App;
```
[Fragment 로 해결한 경우]
```
// 리액트를 불러올 때 Component와 함께 Fragment도 불러와야 함
import React, { Component, Fragment } from ‘react’;
class App extends Component {
  render() {
    return (
      <Fragment>
        <p> Hello world</p>
        <p> Have a Nice day :)</p>
      </Fragment>
    );
  }
}
export default App;
```
1.3. JSX 안에 자바스크립트 값 사용
```
import React, { Component } from 'react';
class App extends Component {
  render() {
    let name = 'react';
    return (
      <div>
        <p>Hi {name}!</p>
      </div>
    );
  }
}
export default App;
```
1.4. CSS 작성 : 인라인 스타일
리액트는 자바스크립트로 작성하기 때문에 아래처럼 style속성값에 일반 문자열이 아닌 자바스크립트 객체가 할당되어야 합니다.
그리고 font-size와 같이 중간에 대시 기호(-)가 들어간 속성명은 fontSize와 같이 카멜케이스로 바꿔줘야합니다. (유지보수나 성능의 이슈가 있어 권장되지 않는 방법입니다.)
```
import React, { Component } from 'react';
class App extends Component {
    render() {
	    const styles = {
	        backgroundColor: 'black',
	        padding: '16px',
	        color: 'white',
	        fontSize: '12px'
	    };
	
	    return (
	        <div style={styles}>
	        Hello World
	        </div>
	    );
    }
}
export default App;
```
1.5. CSS 작성 : 외부파일 불러오기
별도의 파일에 스타일을 정의해놓고, 리액트 컴포넌트 파일에서 정의한 css파일을 import합니다.
```
import './App.css' // 불러오기
1.6. html에서의 class는 className
return (
  <div className="App">
    Hello World
  </div>
);
```
React DOM은 HTML 어트리뷰트(attribute) 이름 대신 캐멀케이(camelCase)를 네이밍 컨벤션으로 사용합니다. 예를 들어, JSX에서 tabindex는 tabIndex로 작성합니다.
class 어트리뷰트는 JavaScript의 예약어이므로 className으로 작성합니다.
2. Props 와 State
2.1. Props
부모 컴포넌트로부터 자식컴포넌트가 물려받는 속성, 다시 말해 Props를 이용해서 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달합니다.
부모에서 받아온 Props는 자식에서 수정이 불가능한데, 이유는 단방향 데이터 흐름을 지키기 위해 강제로 정해진 것이기 때문입니다.
src/App.js
App.js에서 자식 컴포넌트인 Hello 컴포넌트에게 보낼 속성을 정의합니다.
```
import React, { Component } from 'react';
import Hello from './hello.js';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Hello text="React"/> //정의
            </div>
        );
    }
}
export default App;
```
src/hello.js
hello.js에서 부모컴포넌트에서 받은 props를 호출합니다.
```
class Hello extends Component {
    render() {
        return (
        <div>
            <p>
              Hello {this.props.text} //정의 된 props호출
            </p>
        </div>
        );
    }
}
```
2.2. State
State는 컴포넌트 내에서 동적으로 변동되는 데이터를 관리하며, 언제나 기본 값을 미리 설정해야 사용할 수 있습니다.
버튼 클릭으로 숫자가 증가하는 Counter 예제를 보겠습니다.
src/App.js
```
import React, { Component } from 'react';
import './App.css';
import Counter from './Counter.js'// 카운터를 표시해줄 컴포넌트 호출
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }
//함수 실행시 number값이 1 증가
    handleIncrease = () => {
      const { number } = this.state;
//this.setState는 state의 값을 변경할 때 사용 하는 함수
      this.setState({
        number: number + 1
      });
    }
render() {
        return (
          <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter 
                   handleIncrease={this.handleIncrease}
                   number={this.state.number}
                />
            </header>
          </div>
        );
    }
}
export default App;
```
src/Counter.js
```
import React, { Component } from 'react';
//Counter 컴포넌트를 생성하고 Component를 상속
class Counter extends Component {
	render() {
    return (
    <div>
        <h1>Counter</h1>
        <div>값: {this.props.number}</div>
        <button onClick={this.props.handleIncrease}>+</button>
    </div>
    );
	}
}
export default Counter;
```
state에 값을 변경 할 때는, this.setState() 메서드를 사용합니다.

작동순서
conuter.js 에 버튼 클릭하게 되어 this.props.handleIncrese 실행합니다.
이벤트를 받은 app.js 는 선언되어 있는 handleIncrese 함수실행하여 state에 선언되어 있는 number 값을 변경합니다.
app.js 내 state 변경으로 conuter.js에 전달하는 props 값이 변경됩니다.
conuter.js에서 변경된 props 값을 받은 후 변경된 화면을 노출시킵니다.

3. 라이프사이클(생명주기)
라이프사이클은 리액트에서 컴포넌트가 생성되고 업데이트되고 소멸될 때까지 일련의 과정을 의미합니다.
리액트가 실행되는 특정시점에 사용자가 어떤 기능을 추가 하고 싶을때 LifeCycle API를 사용해서 기능을 추가 할 수 있습니다.
[마운트 - 업데이트- 언마운트] 총 세 단계로 크게 나눌수 있습니다.

3.1. 컴포넌트를 생성할 때(Mount)
constructor() => componentWillMount() => render() => componentDidMount()
constructor() : 생성자 메소드로 컴포넌트가 생성될 때 단 한번만 실행되며, 이 메소드에서만 state를 설정할 수 있습니다.
componentWillMount() : 리액트 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출되는 메소드입니다. 아직 DOM이 생성되지 않았으므로 DOM을 조작할 수 없고, render가 호출되기 전이기 때문에 setState를 사용해도 render가 호출하지 않습니다.
render() : 컴포넌트 렌더링을 담당합니다.
componentDidMount() : 컴포넌트가 만들어지고 render가 호출된 이후에 호출되는 메소드입니다.

3.2. 컴포넌트를 변경할 때(Update)
componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() 
=> render() => componentDidupdate()
componentWillReceiveProps() : 컴포넌트 생성후에 첫 렌더링을 마친 후 호출되는 메서드입니다. props를 받아서 state를 변경해야 하는 경우 유용합니다.
shouldComponentUpdate() : 컴포넌트 변경전에 호출되는 메소드입니다. props 또는 state가 변경되었을 때, 재렌더링을 여부를 return 값으로 결정하게됩니다.
componentWillUpdate() : shouldComponentUpdate가 불린 이후에 컴포넌트 변경 전에서 호출되는 메소드입니다. 새로운 props 또는 state가 반영되기 직전 변경 된 값들을 받습니다.

3.3. 컴포넌트를 제거 할 때(Unmount)
componentWillUnmount()
componentWillUnmount() : 컴포넌트가 소멸된 시점에 (DOM에서 삭제된 후) 실행되는 메소드로, 컴포넌트 내부에서 타이머나 비동기 API를 사용하고 있을 때, 이를 제거하기에 유용합니다.
실제 코드에서는 constructor, render, componentDidMount, shouldComponentUpdate, componentDidUpdate, componentWillUnmount 여섯가지 API 위주로 관리하고 있고, 당장 이해 되지 않더라도 괜찮습니다.

