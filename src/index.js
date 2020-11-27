const nodePath = require("path");

function replaceStatement(path, t, keyObj, valObj) {
  path.replaceWith(
    t.variableDeclaration(
      "const",
      Object.keys(keyObj).map((item) => {
        const temVal = valObj[keyObj[item]];
        return t.variableDeclarator(
          t.identifier(item),
          typeof temVal === "string"
            ? t.stringLiteral(temVal)
            : t.stringLiteral(JSON.stringify(temVal))
        );
      })
    )
  );
}

function getValObj(file, relative, keyObj) {
  return getJsonValue(
    nodePath.join(nodePath.dirname(file.filename), relative),
    Object.keys(keyObj).map((item) => {
      return keyObj[item];
    })
  );
}

function getKeyObj(id, key, value) {
  const keyObj = {};
  id.forEach((item) => {
    keyObj[item[value].name] = item[key].name;
  });
  return keyObj;
}

function getJsonValue(path, keys = []) {
  const jsonValue = require(path);
  keys = Array.isArray(keys) ? keys : [keys];
  const res = {};
  for (const key of keys) {
    res[key] = getObjVal(jsonValue, key);
  }
  if (Object.keys(res).length > 0) {
    return res;
  }
  return jsonValue;
}

function getObjVal(obj, key) {
  key.split(".").forEach((val) => {
    obj = obj[val];
  });
  return obj;
}

module.exports = function (_ref) {
  const t = _ref.types;
  return {
    visitor: {
      ImportDeclaration(path, file) {
        // console.log(path.node);
        // console.log(path.node.specifiers);
        if (nodePath.extname(path.node.source.value) === ".json") {
          const keyObj = getKeyObj(path.node.specifiers, "imported", "local");
          const valObj = getValObj(file, path.node.source.value, keyObj);
          replaceStatement(path, t, keyObj, valObj);
        }
      },
      VariableDeclaration(path, file) {
        // console.log("kind", path.node.kind);
        // console.log("id", path.node.declarations[0].id);
        // console.log("init", path.node.declarations[0].init);
        const kind = path.node.kind;
        const id = path.node.declarations[0].id;
        const init = path.node.declarations[0].init;
        console.log(id.properties);
        if (
          init.type === "CallExpression" &&
          nodePath.extname(init.arguments[0].value) === ".json"
        ) {
          const keyObj = getKeyObj(id.properties, "key", "value");
          const valObj = getValObj(file, init.arguments[0].value, keyObj);
          replaceStatement(path, t, keyObj, valObj);
        }
      },
    },
  };
};
