### list
- typescript
- tslint
- react
- babel
- webpack

### 프로젝트 생성
```
mkdir sample002
cd sample002
yarn init -y
```

### typescirpt
```
yarn add typescript
```

파일 추가: tsconfig.json
```
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "noUnusedLocals": true,
    "noImplicitAny": true,
    "target": "es2015",
    "module": "es2015",
    "strict": true,
    "jsx": "react"
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```
OR
```
tsc --init // 파일 생성
```
### tslint
```
yarn add tslint
```

### react
```
yarn add @types/react @types/react-dom react react-dom

yarn add @types/react
yarn add @types/react-dom
yarn add react
yarn add react-dom
```

### babel
```
yarn add babel-loader @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/preset-env @babel/preset-react @babel/preset-typescript

yarn add @babel/core
yarn add @babel/plugin-proposal-class-properties
yarn add @babel/plugin-proposal-object-rest-spread
yarn add @babel/preset-env
yarn add @babel/preset-react
yarn add @babel/preset-typescript
yarn add babel-loader
```

파일추가: .babelrc
```
{
  "presets": [
    "@babel/env",
    "@babel/typescript",
    "@babel/react"
  ],
  "plugins": [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}

```

### webpack
```
yarn add fork-ts-checker-webpack-plugin html-webpack-plugin webpack webpack-cli webpack-dev-server

yarn add fork-ts-checker-webpack-plugin
yarn add html-webpack-plugin
yarn add webpack
yarn add webpack-cli
yarn add webpack-dev-server

```

파일 추가: webpack.config.js
```
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const APP_PATH = path.resolve(__dirname, 'src');
const PUBLIC_PATH = 'public';

module.exports = {
  entry: APP_PATH,

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },

  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: path.join(PUBLIC_PATH, 'index.html') }),
    new ForkTsCheckerWebpackPlugin(),
  ]
};

```

### add scripts
```
  ,"scripts": {
    "build": "webpack --progress --colors --mode=production",
    "start": "webpack-dev-server --config webpack.config.js --progress --colors --open --mode=development"
  }
```


### .gitignore
```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules

# testing
/coverage

# production
/build
/dist

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```


### 참고
```
git clone https://github.com/a-tarasyuk/react-webpack-typescript-babel.git
```