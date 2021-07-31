import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import packageJson from './package.json'
import { terser } from 'rollup-plugin-terser'
import progress from 'rollup-plugin-progress'
import { visualizer } from 'rollup-plugin-visualizer'
import svgr from '@svgr/rollup'
import url from '@rollup/plugin-url'

//https://www.codefeetime.com/post/rollup-config-for-react-component-library-with-typescript-scss/
//https://github.com/egoist/rollup-plugin-postcss/issues/385

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: ['src/index.ts', 'src/inputs/index.ts', 'src/cards/index.ts', 'src/buttons/index.ts'],
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
      url(),
      svgr(),
      progress(),
      peerDepsExternal(),
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
