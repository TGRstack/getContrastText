<p align='center'>
  <h1 align='center'>Material-UI's getContrastText() function and helpers| TGRstack</h1>
</p>

[![Known Vulnerabilities](https://snyk.io/test/github/TGRstack/getContrastText/badge.svg)](https://snyk.io/test/github/TGRstack/typescript-module)

**Development and Production Ready |⸰| [VSCode Extensions](https://marketplace.visualstudio.com/search?term=tgrstack&target=VSCode&category=All%20categories&sortBy=Relevance)**

[![TypeScript](https://img.shields.io/badge/TypeScript-3.0.1-blue.svg?style=flat-square)](https://github.com/Microsoft/TypeScript)
[![TSLint](https://img.shields.io/badge/TS_Lint-5.11.0-8400ff.svg?style=flat-square)](https://github.com/palantir/tslint/)
[![TS-Jest](https://img.shields.io/badge/TS_Jest-22.4.6-8400ff.svg?style=flat-square)](https://github.com/kulshekhar/ts-jest)

[![WebPack](https://img.shields.io/badge/WebPack-4.12.2-blue.svg?style=flat-square)](https://github.com/webpack/webpack/)
[![Node](https://img.shields.io/badge/Node-11.4.0-blue.svg?style=flat-square)](https://nodejs.org/en/)

[![NPS friendly](https://img.shields.io/badge/NPS-friendly-brightgreen.svg?style=flat-square)](https://github.com/kentcdodds/nps)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-friendly-brightgreen.svg?style=flat-square)](https://commitizen.github.io/cz-cli/)
[![Semver friendly](https://img.shields.io/badge/SemVer-friendly-brightgreen.svg?style=flat-square)](https://docs.npmjs.com/about-semantic-versioning)

## Install

```bash
$ npm i -S @tgrx/getcontrasttext
```

## About

Sometimes its useful to access some of the under the hood functionality of Material-UI. I basically copy pasted some of the functions from MUI-4.0.0-alpha.0 and put them on a [/TGRstack/typescript-module](/TGRstack/typescript-module). Easy Peasy.

## Example

```typescript
// TYPINGS
import { PaletteType } from '@material-ui/core'
import { SpacingOptions } from '@material-ui/core/styles/spacing'

// COLORS
import indigo from '@material-ui/core/colors/indigo'
import red from '@material-ui/core/colors/red'
import teal from '@material-ui/core/colors/teal'

// HELPERS
import getContrastText from '@tgrx/getcontrasttext'
import { isProd } from '_config/index'

// SETTINGS

// tslint:disable object-literal-sort-keys
const palette = {
  type:       ('light' as PaletteType),
  primary:    indigo,
  secondary:  teal,
  error:      red,
  background: '#EFF3FA',  // MUI.io: surface-dark
  surface:    '#F9FDFF',  // MUI.io: surface-main
}
const primary = {
  light:  palette.primary[100],
  main:   palette.primary[300],
  dark:   palette.primary[600],
}
const secondary = {
  light:  palette.secondary[600],
  main:   palette.secondary[800],
  dark:   palette.secondary[900],
}
const error = {
  light:  palette.error[300],
  main:   palette.error[700], // no "main vs dark" yet
  dark:   palette.error[700],
}

// tslint:enable object-literal-sort-keys

// Used by `getContrastText()` to maximize the contrast between the background and
// the text.
const contrastThreshold = 3

// Used to shift a color's luminance by approximately
// two indexes within its tonal palette.
// E.g., shift from Red 500 to Red 300 or Red 700.
const tonalOffset = 0.2

const spacing = (4 as SpacingOptions)

const warnings = !isProd

// tslint:disable object-literal-sort-keys
export default {
  palette: {
    type: palette.type,
    primary: {
      light: primary.light,
      main: primary.main,
      dark: primary.dark,
      contrastText: getContrastText({
        background: primary.dark,
        contrastThreshold,
        warnings,
      }),
    },
    secondary: {
      light: secondary.light,
      main: secondary.main,
      dark: secondary.dark,
      contrastText: getContrastText({
        background: secondary.main,
        contrastThreshold,
        warnings,
      }),
    },
    error: {
      light: error.light,
      main: error.main,
      dark: error.dark,
      contrastText: getContrastText({
        background: error.main,
        contrastThreshold,
        warnings,
      }),
    },
    background: {
      default: palette.background, // MUI.io: surface-dark
      paper:   palette.surface,    // MUI.io: surface-main
    },
    contrastThreshold,
    tonalOffset,
  },
  spacing,
  typography: {
    useNextVariants: true,
  },
}
// tslint:enable object-literal-sort-keys
```

## Functions

```typescript
import getContrastText, {
  decomposeColor,
  convertHexToRGB,
  getContrastRatio,
  getLuminance,
} from '@tgrx/getcontrasttext'
```


- default getContrastText()
```typescript
getContrastText({
  background,
  contrastThreshold,
  warnings = true
}: {
  background: string,
  contrastThreshold: number,
  warnings?: boolean
})
```

- decomposeColor()
```typescript
decomposeColor(color: string): {type: string, values: number[]} {
```

- convertHexToRGB()
```typescript
convertHexToRGB(color: string)
```

- getContrastRatio()
```typescript
getContrastRatio(foreground: string, background: string)
```

- getLuminance()
```typescript
getLuminance(color: string)
```

## Contributing

### Docs

- [Starterkit used for this Module](https://github.com/TGRstack/typescript-module)
- [TGRStack Wiki & Documentation](https://github.com/TGRstack/tgrstack.com/wiki)
- [Changelog](/CHANGELOG.md)

### Commands - READ THIS

```bash
* nps                   # Executes the module, watching for rebuilds.
* nps help              # Displays all available commands
* nps commit            # Creates a commit, don't use `git commit -m ...`
* nps build             # Builds the module
* nps lint              # Lint checks the module
* nps test              # Test checks the module
* nps relase            # Semver actions
* nps publish           # NPM actions
```