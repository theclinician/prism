import path from 'path';

const dir = "/Users/hubert/Files/Clinician/repos/prism/packages/prism";

export default {
  experiments: {
    outputModule: true,
  },
  entry: './src/index.tsx', // Entry point
  output: {
    path: path.resolve(dir, 'dist'), // Output directory
    filename: 'index.js', // Output file name
    // library: 'prism', // Library name
    libraryTarget: 'module', // Universal Module Definition
    globalObject: 'this', // Compatibility with node and browser
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'], // File types
    alias: {
      '__': path.resolve(dir, 'src'), // This sets up the alias
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // use: 'ts-loader',
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', 'babel-preset-solid'],
            },
          },
          'ts-loader', // This comes after babel-loader in the array
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', 'babel-preset-solid'],
          },
        },
      },

      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
      },
    ],
  },
  externals: {
    "solid-js": "solid-js", // Avoid bundling solid-js, assumes it's provided by the consumer
  }
};

// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// const config = {
//   entry: './src/index.tsx',
//   output: {
//     filename: 'bundle.js',
//     path: path.join(__dirname, 'dist')
//   },
//   devServer: {
//     contentBase: path.join(__dirname, 'dist'),
//     publicPath: '/'
//   },
//   mode: 'development',
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js', 'jsx', '.scss', '.json']
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts)x?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             babelrc: false,
//             configFile: false,
//             presets: ['@babel/preset-env', 'solid', '@babel/preset-typescript'],
//             plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'],
//           }
//         }
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin()
//   ]
// }
