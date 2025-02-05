# E-commerce FrontEnd 
## ReactJs From Scratch 

Projeto pra estudo e prática começando com ReactJs (sem frameworks ex.: NextJs) no qual eu irei desenvolver as features básicas mencionadas

**Bibliotecas adicionadas:**
- Styled components 
- Axios
- DotEnv 
- Redux 
- FontAwesome

**Bibliotecas removidas:**
- Jest [ainda nao tenho caso de testes, vou tirar pq nao faz sentido]

## Instalação

## Executar
 `npm start`

## Features desenvolvidas
- [x] Requests HTTPs com a biblioteca Axios
- [x] Gerenciamento de estado através de redux
- [x] Ler variavéis de ambiente a partir do .env
- [ ] Formulários dinamicos


## Changelog:

18 de dezembro:
Adicionado leitura de variavel de ambiente através do process.env. 
Observação: essas params devem começar com REACT_APP_ no nome 

3 de dezembro:
```
Index 
└── App
    ├── MenuNav
    └── Panel -> esse panel está ultrapassando a visualização da tela. estou tentando ajustar a visualização do container em App
        └── Header 
```


13 de novembro:
Store adicionada, alteração está 

30 de outubro:
falta adicionar uma store pra alterar o estado que controla se o usuário está logado ou não 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
