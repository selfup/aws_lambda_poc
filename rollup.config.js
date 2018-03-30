import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/index.js',
    output: {
      file: '.index.js',
      format: 'umd',
      name: 'aws_lambda_poc',
      sourcemap: false,
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
];
