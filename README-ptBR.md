<div align="center">

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
</div>

# Sobre

O projeto visa fornecer um padrão simples com as dependências mais utilizadas para iniciar um projeto ReactJS.

## Dependências do projeto

  - [Commitlint] (https://github.com/conventional-changelog/commitlint)
    - [Commitizen] (https://github.com/commitizen/cz-cli)
    - [Husky] (https://github.com/typicode/husky)
  - [styled-components] (https://github.com/styled-components/styled-components)
  - [Datefns] (https://date-fns.org/docs/Getting-Started)
  - [react-app-rewired] (https://github.com/timarney/react-app-rewired)
    - [babel-plugin-root-import] (https://www.npmjs.com/package/babel-plugin-root-import)
    - [Customize cra] (https://github.com/arackaf/customize-cra)
  - [React router dom] (https://reactrouter.com/web/guides/quick-start)
  - [SWR] (https://github.com/vercel/swr)
  - [Axios] (https://github.com/axios/axios)
  - [Prop Types] (https://github.com/facebook/prop-types)
  - [Eslint] (https://github.com/eslint/eslint)
    - [Eslint import helpers] (https://github.com/Tibfib/eslint-plugin-import-helpers)
  - [Color] (https://github.com/Qix-/color)
- [Jest] (https://github.com/facebook/jest)

## Scripts Atuais

O processo de teste e lint são tarefas automatizadas com husky antes de enviar mensagem.

`` `bash
# Inicie o ambiente de desenvolvimento
yarn start
# ou
npm run start

# Inicie o ambiente do processo de construção
yarn build
#ou
npm run build

# Inicie o processo javascript lint - com --max-warnings = 0 atributos para nenhum aviso permitido
yarn lint
#ou
npm run lint

# Inicie o processo de teste
yarn test
#ou
teste de execução npm

# Inicie o processo de teste com atributos de relógio
yarn test:watch
#ou
npm run test: watch
`` `

## Contribuiting

Você pode verificar o arquivo [CONTRIBUTING.md] (CONTRIBUTING.md) para obter mais informações sobre como nos ajudar com esse boilerplate.

## Licença

Este projeto está licenciado sob a licença [MIT] (https://github.com/MRLSK8/react-template/blob/master/LICENSE)
