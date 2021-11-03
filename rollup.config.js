import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import ts from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";

import pkg from "./package.json";

export default [
  {
    input: "src/index.tsx",
    output: {
      dir: "dist",
      // file: pkg.main,
      format: "cjs",
    },

    external: [
      ...(!pkg.peerDependencies ? [] : Object.keys(pkg.peerDependencies)),
    ],
    plugins: [
      resolve(),
      commonjs(),
      json(),
      ts({
        declaration: true,
        declarationDir: "dist",
        noEmitOnError: false,
        exclude: [
          '**/*.spec.ts',
          '**/*.test.ts',
          '**/*.spec.tsx',
          '**/*.test.tsx',
          // default exclude list (see: https://www.typescriptlang.org/tsconfig#exclude)
          'node_modules',
          'bower_components',
          'jspm_packages',
        ]
      }),
      postcss(),
    ],
  },
  {
    input: "src/index.tsx",
    output: [
      {
        file: pkg.module,
        format: "esm",
      },
    ],
    external: [
      ...(!pkg.peerDependencies ? [] : Object.keys(pkg.peerDependencies)),
    ],
    plugins: [
      resolve(),
      commonjs(),
      json(),
      ts(),
      postcss(),
    ],
  },
];
