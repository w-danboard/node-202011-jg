> 安装包
- typescript 使用ts
- rollup     打包
- @rollup/plugin-node-resolve  打包的时候有一些第三方模块，所以要使用此包
- rollup-plugin-typescript2 -D 把ts和rollup做关联的包

> 使用npx tsc --init 命令执行node_modules中.bin文件下的tsc文件，创建一个ts的配置文件

> 手动创建rollup.config.js配置文件

> yarn add ts-node -g 使用node环境运行ts