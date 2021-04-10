# A Simple Guide to Publish vue components to npm 

## 1. configurations in package.json
```js
// package.json

  // make public
  "private": false,
 
 // main entry point
 "main": "package/huichao-hello-world.common.js",
 
 // files that npm will host
  "files": [
    "package",
    "src",
    "*.json"
  ],
  
// add scripts, later need run `npm run build-pkg` to generate package files.
"build-pkg": "vue-cli-service build --target lib --name huichao-hello-world --dest package ./src/install.js",
```

## 2. Entry Point
default is index.js, here I use install.js instead.
```js
// src/install.js

import HelloWorld from "./HelloWorld.vue";
import HcButton from "./hc-button.vue"
import Vue from "vue"


const Components = {
    HelloWorld,
    HcButton,
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;


```

## 3. commands:

https://cli.vuejs.org/guide/build-targets.html#build-targets
```
vue-cli-service build --target lib --name myLib [entry]
``` 

``` 
Note:

Remember to change the `version number` every time to publish

--target lib // keyworld
--name // output filename or package name after build
--dest // output to this directory name
```

```
// commands
npm run build-pkg  // generate the package files
npm adduser
npm login
npm publish  // publish to npm
```

## 4. usage
```js
 // usage:

import Vue from 'vue'
import {HelloWorld, HcButton} from 'huichao-hello-world'
import 'huichao-hello-world/package/huichao-hello-world.css'

Vue.use({HelloWorld, HcButton});

```

## 5. If you want to delete the package from npm, run:

> npm unpublish <package name>  
 
or
> npm unpublish <package name> -f

ref: https://docs.npmjs.com/unpublishing-packages-from-the-registry
