``` js
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

vue-cli-service build usage:
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

```json
// commands
npm build-pkg
npm adduser
npm login
npm publish
```

```js
 // usage:

import Vue from 'vue'
import {HelloWorld, HcButton} from 'huichao-hello-world'
import 'huichao-hello-world/package/huichao-hello-world.css'

Vue.use({HelloWorld, HcButton});

```
