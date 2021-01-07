import path from 'path'
import ts from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.ts',
  output: {
    format: 'cjs', // common.js规范
    file: path.resolve('dist/budle.js')
  },
  plugins: [
    ts({
      tsconfig: path.resolve('tsconfig.json')
    }),
    nodeResolve({
      extendsions: ['.js', '.ts']
    })
  ]
}