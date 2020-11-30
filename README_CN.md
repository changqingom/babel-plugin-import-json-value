# babel-plugin-import-json-value
[![NPM](https://nodei.co/npm/babel-plugin-import-json-value.png?downloads=true&stars=true)](https://npmjs.org/package/babel-plugin-inline-json-import)

[English Doc](./README.md)


一个将引入的json文件的值直接赋值为js中的常量的babel插件.

## 展示

引入 package.json 文件:

```json
{
  "name": "babel-plugin-import-json-value",
  "version": "0.0.3",
  "devDependencies": {
    "@babel/cli": "^7.12.8"
  }
}
```

编译前:

```js
import { version, name as name1, default as pkg } from "./data.json";
import pkg1 from "./data.json";
import * as pkg2 from "./data.json";
const pkg3 = require("./data.json");
const { version1, name: name2 } = require("./data.json");
const name3 = require("./data.json").name;
const text1 = require("./data.json").devDependencies["@babel/cli"];
```

编译后:

```js
const version = "0.0.3",
      name1 = "babel-plugin-import-json-value",
      pkg = "{\"name\":\"babel-plugin-import-json-value\",\"version\":\"0.0.3\",\"devDependencies\":{\"@babel/cli\":\"^7.12.8\"}}";
const pkg1 = "{\"name\":\"babel-plugin-import-json-value\",\"version\":\"0.0.3\",\"devDependencies\":{\"@babel/cli\":\"^7.12.8\"}}";
const pkg2 = "{\"name\":\"babel-plugin-import-json-value\",\"version\":\"0.0.3\",\"devDependencies\":{\"@babel/cli\":\"^7.12.8\"}}";
const pkg3 = "{\"name\":\"babel-plugin-import-json-value\",\"version\":\"0.0.3\",\"devDependencies\":{\"@babel/cli\":\"^7.12.8\"}}";
const version1 = undefined,
      name2 = "babel-plugin-import-json-value";
const name3 = "babel-plugin-import-json-value";
const text1 = "^7.12.8";

```


## 安装

```sh
$ yarn add -D babel-plugin-import-json-value
```

Add `babel-plugin-import-json-value` to your babel config . 
```json
{
  "plugins": [
    "babel-plugin-import-json-value"
  ]
}
```

## Tips

目前暂不支持`import`与`require`的默认导出和json除字符串之外的值.

- TODO:

- [ ] 支持json文件中除字符串之外的值.
- [x] 支持`import`与`require`的默认导出
- [ ] 支持esModule模块导出




## License
This project is licensed under the MIT License - see the [LICENSE](/LICENSE)
file for details