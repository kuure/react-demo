# Simple Node.js / React / Vite / GitHub Pages Demo

This is a simple web application that uses:

- [Node.js](https://nodejs.org/en): "Run JavaScript Everywhere"
- [React](https://react.dev/): "The library for web and native user interfaces"
- [Vite](https://vite.dev/): "The Build Tool for the Web"
- [GitHub Pages](https://docs.github.com/en/pages): "GitHub Pages turns any GitHub repository into a live website"

Node.js on its own is "just" a JavaScript interpreter. But node also
includes the [Node Package Manager](https://docs.npmjs.com/) (npm) allows
you to install external software packages that do all sorts of things to
enhance your applications

One of those things is React; it allows you to use JavaScript to create
"components", or reusable interface elements, and to manage the state of
your application. These are frequently written using something called
[JSX](https://react.dev/learn/writing-markup-with-jsx), which is sort of
an HTML shorthand inside of JavaScript, but isn't actually real
JavaScript.

Vite is a collection of build tools that help create and manage your
application; it can create new versions of applications based on any
number of libraries using JavaScript or TypeScript, integrate CSS, running
development environments, and "transpiling" TypeScript and JSX into "real"
HTML, JavaScript and CSS.

GitHub Pages can be configured to automatically deploy this web site every
time you `push` a commit to a particular branch, with all sorts of levels
of complexity.

## Folder Structure

React is an "unopinionated" framework, meaning it does not care where you
put your files and folders as long as it knows where to find them.

Vite, however, establishes a folder structure and sets up all the
necessary files for you. It has its own configuration file,
`vite.config.js`, which has been modified slightly in this application to
work with the GitHub Pages system.

The folder contents look like this:

```sh
.gitignore
index.html
package.json
public/
src/
README.md
vite.config.js
```

`.gitignore` tells git to _not_ track a number of system and development
files and folders

`index.html` is the entry point for the app

`package.json` is the file that sets the app configuration, handles
running the development and deployment processes, and tells NPM what
software is needed to run this app

`public/` is where images, favicons, or other publicly readable files
should go.

`src/` is where the application's actual source code is stored

`vite.config.js` as mentioned before

## How To Run This App

Assuming you are in a terminal inside the root directory of `simple-demo`
and have Node installed, type this at your prompt:

`npm install`

This should install all the required external packages specified in the
`package.json` file, as well as all of their dependencies.

To run the application and view it in your browswer, type:

`npm run dev`

This will start a web server on port 5173 by default.

To _stop_ the server type `control-c` at the command prompt.

## Connecting the Files

`index.html` is opened first - this is where the app's title is set, and
includes this code:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

This instantly runs the file `main.jsx` located in the `src` directory.
The entire document looks like this:

```js
import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

This loads some code from the React library, and also loads code from
the file named `App.jsx`.

Then it selects the `root` element by its ID in the HTML file, invokes
StrictMode, then runs the code from `App.jsx`.

Finally inside of `App.jsx` we see the code that is actually unique to
our project and just setup and configuration.
