#!/bin/bash

# install dependencies
# library dependencies
yarn add react react-dom classnames

# project dependencies
# yarn add react-router-dom react-redux react-router-redux react-router-dom redux-saga
# yarn add --dev handlebars

# dev dependencies
yarn add --dev babel babel-core babel-cli babel-eslint
yarn add --dev babel-preset-es2015 babel-preset-es2015-loose babel-preset-es2016 babel-preset-react babel-preset-stage-2 babel-polyfill
yarn add --dev babel-plugin-transform-es2015-modules-commonjs babel-plugin-dynamic-import-node syntax-dynamic-import
yarn add --dev eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react
yarn add --dev flow-bin
yarn add --dev file-loader node-sass postcss postcss-cli postcss-loader sass-loader style-loader
yarn add --dev redux-devtools-extension
# yarn add --dev webpack webpack-dev-server webpack-merge clean-webpack-plugin autoprefixer
yarn add --dev rollup

# for library project, change necessary dependencies to peerDependencies (or devDependencies)

# lint related

# flow related
if [ ! -e ".flowconfig" ]; then
  flow init
fi

if [ ! -e "flow-typed" ]; then
  flow-typed install
fi

# babel related

# create directories
if [ ! -e "src/" ]; then
  mkdir src
fi


# adjust git remote origin, etc
