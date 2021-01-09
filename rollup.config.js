import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import image from '@rollup/plugin-image'
import pkg from './package.json'

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: true }),
    image()
  ],
  external: ['react', 'react-dom', '@material-ui/core/ButtonBase', '@material-ui/core/Box', '@material-ui/core/Paper', '@material-ui/core/Typography', 'react-bootstrap/Image', '@material-ui/core/styles']
}
