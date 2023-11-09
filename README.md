# Simple System demo project

This project was develoed using these tools:

- [@vitejs](https://vitejs.dev/) for project initialisation. 
- [@MantineUI](https://mantine.dev/) as component library.
- [@Tabler](https://tabler.io/) as icons library.
- [@MobX](https://mobx.js.org/) for state management.
- [@Jest](https://jestjs.io/) && [@TestingLibrary](https://testing-library.com/) for testing.

## Installation 📦

```
# clone the repo
git clone git@github.com:chafikchaban/simple_system_demo.git

# go into app's directory
cd simple-system_demo

# install dependencies

yarn

or

npm i
```

## Running ⚙️

### running the project locally

⚠️⚠️

In order to have a better development/testing experience, `Github API` requires authentication. You can read more about it [here](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api?apiVersion=2022-11-28#authenticating).

You can do that by creating a [Github personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) and assigning it to the `VITE_GH_TOKEN` variable inside the [env file](./.env).

⚠️⚠️

```js
  yarn dev
```
or 

```
npm run dev
```

## Tests🛠️

### running tests

```js
  yarn test
```
or 

```
npm run test
```

## What's Next ?

Developer documentation can be found [here](./docs/dev-docs.md).
