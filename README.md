# React webpack starter

A ReactJS template which would help to start frontend development quickly without doing any setup on your own.

## Tech stack

- Webpack, Webpack CLI, Webpack dev server
- Babel loader, babel presets
- React, React DOM

## Add babel

- Install babel related packages

  ```bash
  npm install -D @babel/core babel-loader @babel/preset-env @babel/preset-react
  ```

## Add webpack

- Install webpack related packages

  ```bash
  npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
  ```

## Add TypeScript

- Install TypeScript & ts-loader

  ```
  npm install -D typescript ts-loader
  ```

- Execute `npx tsc --init` to add `tsconfig.json` with basic TS configs
- Install dev dependencies - `@types/react`, `@types/react-dom` to have TypeScript types for React and React DOM

  ```bash
  npm i -D @types/react @types/react-dom
  ```
