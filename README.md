# babel-plugin-import-json-value
[![NPM](https://nodei.co/npm/babel-plugin-import-json-value.png?downloads=true&stars=true)](https://npmjs.org/package/babel-plugin-inline-json-import)

[中文文档](./README_CN.md)

A babel pre-processor that inlines all imports of JSON files straight into your
JavaScript files.

## Example

My package.json file:

```json
{
  "name": "babel-plugin-import-json-value",
  "version": "0.0.1",
}
```

input:

```js
import { version, name } from "../package.json";
const { name: name1, version: version1 } = require("../package.json");
```

output:

```js
const version = "0.0.1",
      name = "babel-plugin-import-json-value";
const name1 = "babel-plugin-import-json-value",
      version1 = "0.0.1";
```


## Installation

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

**Value types other than strings are not currently supported, and the rest will be implemented later**

- TODO:

- [ ] Support other value types.
- [ ] Support import and require default export.




## License
This project is licensed under the MIT License - see the [LICENSE](/LICENSE)
file for details