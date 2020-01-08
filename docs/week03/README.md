### week03
3주차는 리덕스에 대해 알아봅니다.

### 1.redux-counter

이전에 만든 카운터에 리덕스를 적용해봅시다.

#### 1.1 project settings

#### 1.1.1 project create
프로젝트를 생성합니다.

``` 
npx create-react-app 005-redux-counter --typescript
```

#### 1.1.2 project init

불필요 파일 제거

``` 
cra로 만들었으니 불필요한 파일을 제거
```

#### 1.1.3 create folder

디렉토리

``` 
├─src
│  ├─actions
│  ├─components
│  ├─containers
│  ├─reducers
│  ├─lib
│  │
│  ├─index.tsx
│  └─...
│
```

설명

* actcions
    - 액션 타입과 액션 생성자 파일을 저장합니다.
* components
    - 컴포넌트의 뷰가 어떻게 생길지만 담당하는 프리젠터이셔널 컴포넌트를 저장합니다.
* containers
    - 스토어에 있는 상태를 props로 받아 오는 컨테이너 컴포넌트들을 저장합니다.
* reducers
    - 스토어의 기본 상태 값과 상태의 업데이트를 담당하는 리듀서 파일들을 저장합니다.
* lib
    - 일부 컴포넌트에서 함께 사용되는 파일을 저장합니다.

#### 1.2 presentational components, container components

#### 1.2.1 presentational components
프리젠테이셔널 컴포넌트

* 오직 뷰만 담당
* DOM 엘리먼트와 스타일이 있음
* 리덕스 스토어에 직접 접근 할 권한은 없음
* props로만 데이터를 가져 올 수 있음
* 대부분 state가 없음, 있으면 UI 관려된 것
* 주로 함수형 컴포넌트로 작성
* state가 있어야 하거나 최적화를 하려고 라이프 싸이클 메서드가 필요할 때는 클래스형 컴포넌트로 작성함

#### 1.2.2 container components

컨테이너 컴포넌트
* 컨테이너 컴포넌트들의 관리를 담당
* 내부 DOM  엘리먼트를 직접적으로 사용 할 때는 없고, 감싸는 용도일 때만 사용
* 스타일도 없어야함
* 상태를 갖고 있을 떄가 많고, 리덕스에 직접 접근

#### 1.2.3 이 구조 장점
컴포넌트를 이렇게 두 카테고리로 나누면 장점이 있다. 
사용자가 이용할 유저 인터페이스와 상태를 다루는 데이터가 분리되어 
프로젝트를 이해하기 쉽고, 컴포넌트 재사용률도 높다.

#### 1.3 App Component 연결
#### 1.4 Create Counnter Component


