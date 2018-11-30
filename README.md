# Synopsis

This is a markdown previewer for github.

## Challenges

* Injecting html . I couldn't use a simple
``` javascript
document.getElementById('container').innerHTML = marked(this.state.textarea)
```
in my rendering as the element was null.
Therefore I used  [dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml).
dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. you can set HTML directly from React, but you have to type out dangerouslySetInnerHTML to remind yourself seeting HTML from code is risky because it's easy to inadvertently expose your users to a cross-site scripting (XSS) attack.

* Create line break within my string.

## Directory Structure

```bash

random_quote_machine
├── .git
├── node_modules
├── public
├── src
│   ├── App.js
│   ├── App.scss
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── serviceWorker.js
├── .gitattributes
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```

## Built With

* html
* scss
* [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript)
* [React.js](https://reactjs.org/docs/hello-world.html)
* [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)

## Authors

**Alex Disdier** - *Initial work* - [alexdisdier](https://github.com/alexdisdier)

## Acknowledgments

* This is part of Front End Libraries Projects in order to get the certification from [FreeCodeCamp](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
