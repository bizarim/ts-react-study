## 요약
### React 개념?
- React는 페이스북에서 개발한 유저인터페이스 라이브러리
- Virtual DOM 이라는 개념을 사용하여 상태의 변함에 따라 선택적으로 유저인터페이스를 렌더링
- 따라서, 최소한의 DOM 처리로 컴포넌트들을 업데이트 할 수 있게 함.
( 일반적인 DOM및 렌더 트리 구성은 아래와 같음, 매우 순차적. )
### DOM(Document Object Model)?
- 객체를 통하여 구조화된 문서를 표현하는 방법. 주로 XML혹은 HTML로 작성됨.
- 정적이고, 트리형태로 구성되어있으며, JavaScript와 CSS를 적용시켜 화려한 front를 창조하기도함.
- DOM 자체의 처리속도는 빠른편이나, 브라우저 단에서 DOM의 변화가 일어나면, 브라우저가 CSS를 다시 연산하고 > 레이아웃을 구성하고 > 웹페이지를 리페인트 하는데 이 과정에서 시간이 허비된다.
- 여기서 레이아웃을 새로 구성하면서 계산하는 것을 reflow라고 하고, 색상 변경과 같은 레이아웃에 관계없는 것들을 거리하는건 repaint 라고 함.

### DOM의 문제점?
- 브라우저는 미뤄두고 하는 기능도 가지고있다 : 코드가 실행될 때마다 reflow를 진행한다 판단하면 (성능이 저하된다 판단하면) 브라우저는 미뤄두고 한꺼번에 일을 처리하도록 유도한다.
- 하지만 제때제때 가져와야하는 값들 혹은 이벤트들도 있다. (offsetTop, scrollTop, getComputedStyle)등의 코드가 실행 될 때는 현재의 값을 가저오는 것들이 중요하기 때문에 reflow가 여러번 발생 할 수 밖에 없다.
- 그렇기 때문에, 성능 개선을 위해서는 reflow 횟수를 줄이기 위해 코드를 최적화 해야함.

### DOM의 문제점 해결법?
- Virtual DOM (?)
- html -> 시각화 : 어쩔 수 없음 ( 주역할이기 때문에 )
- 적어도 최소한의 DOM조작을 통해 우리의 작업을 처리하는 방식으로 이를 개선해야 함.
- 만약, DOM 작업을 가상화 하여 미리 처리한 다음에 한꺼번에 적용할 수 있는 방법이 있다면?
( 출처 : https://www.slideshare.net/taggon/react-js-46357445 )

### Virtual DOM 을 사용하면
실제 DOM 에 접근하여 조작하는 대신에, 이를 추상화 시킨 자바스크립트 객체를 구성하여 사용합니다.
이는 마치 실제 DOM 의 가벼운 사본과도 비슷하죠.(?)
React 에서 데이터가 변하여 브라우저상의 실제 DOM 을 업데이트 할 때에는 다음과 같이 3가지 절차를 밟습니다
1. 데이터가 업데이트되면, 전체 UI 를 Virtual DOM 에 리렌더링 합니다.
2. 이전 Virtual DOM 에 있던 내용과 현재의 내용을 비교합니다.
3. 바뀐 부분만 실제 DOM 에 적용이 됩니다.
결국에는 컴포넌트가 업데이트 될 때, 레이아웃 계산이 한번만 이뤄집니다.
