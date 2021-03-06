import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

export default {
  input: 'styles.js',
  output: {
    file: 'build/lotrek-ui.js',
    format: 'esm'
  },
  plugins: [
    scss({
      processor: () => postcss([autoprefixer()]),
      outputStyle: 'compressed'
    })
  ]
}