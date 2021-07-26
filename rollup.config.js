import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import packageJson from './package.json'
import { terser } from 'rollup-plugin-terser'
import progress from 'rollup-plugin-progress'
import { visualizer } from 'rollup-plugin-visualizer'
import svg from 'rollup-plugin-svg'

//https://www.codefeetime.com/post/rollup-config-for-react-component-library-with-typescript-scss/
//https://github.com/egoist/rollup-plugin-postcss/issues/385

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: ['src/index.ts', 'src/inputs/index.ts'],
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        exports: 'auto',
        sourcemap: false,
      },
    ],
    preserveModules: true,
    plugins: [
      svg(),
      progress(),
      peerDepsExternal(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      postcss({
        extract: true,
        minimize: true,
        modules: true,
      }),
      terser(),
      visualizer({}),
    ],
    external: [...Object.keys(packageJson.peerDependencies || {}), ...Object.keys(packageJson.dependencies || {})],
  },
]
