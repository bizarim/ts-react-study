## typescript basic

### - ts-setting
#### 1. 개발환경
```
window (or mac)
vscode
node lts (v10. 이후)
yarn (or npm)
```
#### 2. 프로젝트 생성
``` shell
mkdir 000-ts-practice
cd 000-ts-practice
yarn init -y
```

#### 3. package 설치
global add
``` shell
yarn global add typescript  // 글로벌 설치 이미 설치 되어 있다면 패스
```
``` shell
tsc --init      // tscoinfig.json 파일 생성
```
tsconfig.json
``` json
{
  "compilerOptions": {
      "module": "commonjs",
      "target": "es6",
      "noImplicitAny": false,
      "declaration": false,
      "strictNullChecks": true,
      "sourceMap": true,
      "outDir": "./dist",
      "baseUrl": "./"
  },
  "include": [
      "./src/**/*"
  ]
}
```
한번에 추가
``` shell
yarn add typescript tslint ts-node // 통합설치
```
개별 추가
``` shell
yarn add typescript         // 프로젝트 설치
yarn add tslint             // tslint 사용
yarn add ts-node            // tsc 컴파일 && ts-node 실행
```
package.json에 scripts 추가
``` json
  ,"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "tslint -p .",
    "exec": "ts-node ./src/main.ts",
    "build": "yarn run lint && tsc",
    "start": "yarn run build && yarn run exec"
  }

```

#### 4. main.ts 생성
```
src 폴더 생성
src 폴더 안에 main.ts 파일 생성
main.ts 파일안에 console.log('main'); 입력 후 저장
```

#### 5. 샐행
```
yarn run start
```

### - ts-practice
#### 1. Hello.ts 파일 생성
practice 폴더안에 Hello.ts를 생성
```
├─dist
├─node_modules
├─src
│  ├─practice
│  │  ├─Hello.ts
│  │
│  └─main.ts
│
```

#### 2. 문법
##### 1. [기본타입](01.PrimitiveType.md)
- boolean
- number
- string
- array
- tuple
- enum
- any
- void
- null & undefined
- never

##### 2. 변수선언
- var
- let
- const

#### 3. [contents](Contents.md)
내용 따라 해보기


### 책
```
타입스크립트 퀵스타트
```