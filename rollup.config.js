import typescript from "@rollup/plugin-typescript";

export default {
  input: ['./src/mixin.ts'],
  output: {
    dir: 'exports',
    format: 'es'
  },
  plugins: [
    typescript()
  ]
}