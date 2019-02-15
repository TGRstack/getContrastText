<p align='center'>
  <h1 align='center'>Typescript Module w/ Definitions (TGRStack)</h1>
</p>

[![Known Vulnerabilities](https://snyk.io/test/github/TGRstack/typescript-module/badge.svg)](https://snyk.io/test/github/TGRstack/typescript-module)

**Development and Production Ready |⸰| [VSCode Extensions](https://marketplace.visualstudio.com/search?term=tgrstack&target=VSCode&category=All%20categories&sortBy=Relevance)**

[![TypeScript](https://img.shields.io/badge/TypeScript-3.0.1-blue.svg?style=flat-square)](https://github.com/Microsoft/TypeScript)
[![TSLint](https://img.shields.io/badge/TS_Lint-5.11.0-8400ff.svg?style=flat-square)](https://github.com/palantir/tslint/)
[![TS-Jest](https://img.shields.io/badge/TS_Jest-22.4.6-8400ff.svg?style=flat-square)](https://github.com/kulshekhar/ts-jest)

[![WebPack](https://img.shields.io/badge/WebPack-4.12.2-blue.svg?style=flat-square)](https://github.com/webpack/webpack/)
[![Node](https://img.shields.io/badge/Node-11.4.0-blue.svg?style=flat-square)](https://nodejs.org/en/)

[![NPS friendly](https://img.shields.io/badge/NPS-friendly-brightgreen.svg?style=flat-square)](https://github.com/kentcdodds/nps)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-friendly-brightgreen.svg?style=flat-square)](https://commitizen.github.io/cz-cli/)
[![Semver friendly](https://img.shields.io/badge/SemVer-friendly-brightgreen.svg?style=flat-square)](https://docs.npmjs.com/about-semantic-versioning)

## About

**Expose all the knobs  |⸰| As lean as a racehorse can get |⸰| Fork and keep as an upstream, then create your own modules**

This starter kit is a launching point for ts/js module development (not React). Running the build script compiles the typescript code into a distribution that is ready to be published to a registry like NPM, and can easily be consumed by other TS modules. This module is part of a collection of uniformly built starter-kits designed for large-scale application development with TypeScript, GraphQL, and React. Find these, articles, and examplse at [www.TGRStack.com](http://www.TGRStack.com). Skip to the bottom for links to a series of tutorials that walkthrough the creation of this module.

## Commands - READ THIS

```bash
* nps                   # Executes the module, watching for rebuilds.
* nps help              # Displays all available commands
* nps commit            # Creates a commit, don't use `git commit -m ...`
* nps build             # Builds the module
* nps lint              # Lint checks the module
* nps test              # Test checks the module
```

## Features

### Core

- [x] 🚀  ES2018+ support syntax that is stage-3 or later in the TC39 process.
- [x] 🎛  Preconfigured to support development and optimized production builds
- [x] 🎶  `typescript` incremental returns reducing development bugs

### Style

- [x] 🚦  `tslint` configured for strict, consistent, code style
- [ ] 🚦  `ts-prettier` for some of that code-consistancy that's missing from tslint
- [ ] 🚦  `SonarTS` Static code analyzer detects bugs and suspicious patterns

### Tests

- [x] 🎭 `jest` as the test framework.
- [x] 🎭 `ts-jest` configured to test TS files, uses tsconfig.jest.json, and skip babel.
- [x] 🎭 `enzyme`  makes it easier to assert, manipulate, and traverse components.

### Build (w/ Webpack)

- [x] 📦  All source is bundled using Webpack v4
- [x] 🌟  webpack for dev, prod, common
- [x] 🚦  `ts-loader` for compiling typescript
- [ ] 🚦  `webpack-graphql-loader` for separating gql from ts files
- [x] 💦  babel-loader for additional polyfills (browser support)
- [ ] 😎  `HappyPack` for ts-loader
- [x] 🤖  code chunking for better production performance
- [x] 🤖  Vendor.js for better developer experience
- [ ] 🤖  Vendor DLL for better performance
- [x] 🎄  Tree-shaking
- [x] 👻  DotEnv w/ friendly features [docs: DotEnv](#docs-dotenv)
- [x] ⛷  Module Aliasing [docs: Module Aliasing](#docs-module-aliases)
- [x] ✨  `terser-webpack-plugin` instead of `uglifyJS`

### Utils

- [x] 🎮  `nps` npm scripts w/o a bloated package.json and limits of json [docs: NPS](#docs-nps).
- [x] 🙌  `commitizen` to help us generate beautifully formatted and consistent commit messages.
- [x] 😹  `cz-emoji` is a plugin for commitizen that adds emoji to the commit template.
- [x] 🏆  `standard-version` is a replacement for `npm version` with automatic CHANGELOG generation
- [ ] ✅  `commitlint` validates commit messages to follow commitizen patterns

## Getting started

To use the starter-kit to build your own ts-module run these commands:

```bash
git clone https://github.com/Falieson/2018-typescript-module.git my-project
cd my-project
rm -rf .git && git init
git commit -m "INIT'd w/ Falieson's 2018-typescript-module@SHA4985"
npm install
nps test
nps
```

Open package.json and reset following fields:

```text
- name
- version ( It is recommended to start from 1.0.0 )
- description
- repository.url
- author
- license ( use whatever you want )
```

Now go make some changes to `src/index.ts` to see the tooling in action.

## Docs

- [HowTo make a TS Module w/ Declarations](http://www.tgrstack.com/#ts-module_articles)
- [Changelog](/CHANGELOG.md)

### docs-dotenv

Webpack is configured to use a DotEnv plugin and uses DotEnv files in specific ways.

1. Everything in `.env.example` is considered a required .env field (compiler complains)
2. `.env.development` will be used if `.env` is missing
3. In production just use .env, this is ignored by git (as it should be!)

### docs-module-aliases

Module aliases are defined in 2 places because of an issue w/ [tsconfig-paths-webpack-plugin](https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/34)

- Aliasing for typescript, ts-node, ts-jest, the IDE are defined in `tsconfig.json` as expected.
- Since the webpack plugin isn't working, aliases are duplicated in `./webpack/config.js`.

**Any changes to one requires a change to the other!**

### docs-nps

`node-package-scripts` removes the limitation of package.json enabling Javascript and //comments. 

To change scripts modify `/scripts/` and use `nps <command>` instead of `npm run <command>`.
The entry point for nps is `./package-scripts.js` which routes to `scripts/index.js` which routes to the friendlier `scripts/__index.js`.

## FAQ

### Where are all the files in my IDE?

You must be using vscode! I have configured vscode workspace settings to hide everything from the filebrowser that you're unlikely to touch in day-to-day development.

Many files are still accessible through search (ctrl+p), such as the `./vscode/settings.json` file where you can comment/uncomment my decisions and make everything your own.

P.S. you may like the tgrstack snippets extension since its formatted following the linting preferneces here.

## References

- [Falieson's 2018 TS Lib Starter](https://github.com/falieson/2018-typescript-module)
- [Hotell's TS Lib Starter](https://github.com/Hotell/typescript-lib-starter)
- [AlexJoverm's TS Lib Starter](https://github.com/alexjoverm/typescript-library-starter)
- [Basarat's TS Lib STarter](https://github.com/basarat/ts-npm-module)
