
``` json
  "private": false,
```

``` json
 "main": "package/huichao-hello-world.common.js",
  "files": [
    "package",
    "src",
    "*.json"
  ],
  
```
``` json
"build-pkg": "vue-cli-service build --target lib --name huichao-hello-world --dest package ./src/install.js",
```

```
每次更publish 要修改version number

--target lib 关键字 指定打包的目录
--name 打包后的文件名字
--dest 打包后的文件夹的名称
```


```json

npm build-pkg

npm adduser
npm login
npm publish
```
