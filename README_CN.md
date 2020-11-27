# babel-plugin-import-json-value
[![NPM](https://nodei.co/npm/babel-plugin-import-json-value.png?downloads=true&stars=true)](https://npmjs.org/package/babel-plugin-inline-json-import)

[English Doc](./README.md)


一个将引入的json文件的值直接赋值为js中的常量的babel插件.

## 展示

引入 package.json 文件:

```json
{
  "name": "babel-plugin-import-json-value",
  "version": "0.0.1",
}
```

编译前:

```js
import { version, name } from "../package.json";
const { name: name1, version: version1 } = require("../package.json");
```

编译后:

```js
const version = "0.0.1",
      name = "babel-plugin-import-json-value";
const name1 = "babel-plugin-import-json-value",
      version1 = "0.0.1";
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
- [ ] 支持`import`与`require`的默认导出




## License
This project is licensed under the MIT License - see the [LICENSE](/LICENSE)
file for details