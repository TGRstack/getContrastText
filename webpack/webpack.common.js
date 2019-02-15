const fs = require('fs')
const path = require('path')
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals')
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { TSDeclerationsPlugin } = require('ts-loader-decleration')

const paths = require('./paths')

// #  RULES
// ## TS w/ BABEL
const typescript = (() => {
  const configFile = path.resolve(paths._, 'tsconfig.json')
  const tsOptions = {
    context: paths._,
    configFile,
    transpileOnly: true,
  }
  const loader = {
    test: /\.ts$/,
    include: paths.src._,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: true,
        }
      },
      {
        loader: 'ts-loader',
        options: tsOptions
      }
    ]
  }
  // const tsPaths = new TsconfigPathsPlugin({
  //   configFile,
  // })

  return {
    loader,
    // paths: tsPaths,
  }
})()

// ## FILES like csv and images
const files = {
  // test: /\.(png|jpg|gif)$/,
  exclude: [/\.js$/, /\.ts$/, /\.json$/],
  use: [
    {
      loader: 'file-loader',
      options: {
        name (file) {
          if (process.env === 'development' || process.env === undefined) {
            return '[path][name].[ext]'
          }

          return '[hash].[ext]'
        }
      }
    }
  ]
}

// # PLUGINS
const dotEnvOpts = (() => {
  /** dotEnvIfExists
   *
   * Uses .env.development for default values
   */
  const dotEnvIfExists = (() => {
    const envPath = path.join(paths._, '.env')
    const defaultEnvPath = envPath+'.development'

    const envExists = fs.existsSync(envPath)
    return envExists
      ? envPath
      : defaultEnvPath
  })()

  return {
    path: dotEnvIfExists, // path.join(paths._, '.env'), //  dotEnvIfExists,
    // load '.env.development' to verify the '.env' variables are all set.
    safe: path.join(paths._, '.env')+'.development',
    // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    systemvars: true,
    // hide any errors
    // silent: true
  }
})()

const outputName = 'index'

module.exports = {
  entry: {
    main: paths.src.entry
  },
  output: {
    path: paths.build._,
    filename: `${outputName}.js`,
    libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.csv', '.ts', '.js', '.json',],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      typescript.loader,
      // graphql,
      files,
    ],
  },
  plugins: [
    new Dotenv(dotEnvOpts),
    // typescript.paths,
    new TSDeclerationsPlugin({
      main: 'main',
      output: `${outputName}.d.ts`
    }),
  ],
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __dirname: false,
    __filename: false,
  },
}
