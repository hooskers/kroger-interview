# Kroger Interview Challenge

React app that displays a list of menu categories and a table of menu items;
`src/List.jsx` contains the component for displaying the list of clickable categories
`src/Menu.jsx` contains the component for displaying a table of menu items
`src/endpoint.jsx` just contains the endpoint to make it easy to pass around between components

Using a CSS-in-JSS librarying called [Emotion](https://emotion.sh) for style rules
Using [Axios](https://github.com/axios/axios) for network requests

# Usage

To try it, install the node packages:

```shell
yarn
```

Then start the dev server with:

```shell
yarn start
```

and visit `localhost:1234` in your browser.

Or build a relase build using:

```shell
yarn build
```

which outputs the file to the `./dist` folder.
