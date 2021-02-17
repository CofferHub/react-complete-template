<div align="center">

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
</div>

# About

The project aims to give a simple boilerplate with most used dependencies for start a ReactJS project.

## Project Dependencies

  - [Commitlint](https://github.com/conventional-changelog/commitlint)
    - [Commitizen](https://github.com/commitizen/cz-cli)
    - [Husky](https://github.com/typicode/husky)
  - [Styled components](https://github.com/styled-components/styled-components)
  - [Datefns](https://date-fns.org/docs/Getting-Started)
  - [React app rewired](https://github.com/timarney/react-app-rewired)
    - [Babel plugin root import](https://www.npmjs.com/package/babel-plugin-root-import)
    - [Custumize cra](https://github.com/arackaf/customize-cra)
  - [React router dom](https://reactrouter.com/web/guides/quick-start)
  - [SWR](https://github.com/vercel/swr)
  - [Axios](https://github.com/axios/axios)
  - [Prop types](https://github.com/facebook/prop-types)
  - [Eslint](https://github.com/eslint/eslint)
    - [Eslint import helpers](https://github.com/Tibfib/eslint-plugin-import-helpers)
  - [Color](https://github.com/Qix-/color)
- [Jest](https://github.com/facebook/jest)

## Current Scripts

The testing and lint process are tasks automated with husky before commit message.

```bash
# Start the development environment
yarn start
# or
npm run start

# Start the build process environment
yarn build
#or
npm run build

# Start the javascript lint process - with --max-warnings=0 attrs for no warning allowed
yarn lint
#or
npm run lint

# Start the testing process
yarn test
#or
npm run test

# Start the testing process with watch attrs
yarn test:watch
#or
npm run test:watch
```

## Contribuiting

You can check the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information about how to helps us with this boilerplate.

## License

This project is licensed under the [MIT](https://github.com/MRLSK8/react-template/blob/master/LICENSE) License
