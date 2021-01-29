## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

## Code Styling

### `components architecture`
In this project using Atomic Design methodology, that means we use next components:
1. Atoms - the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts;
2. Molecules - the composition of one or more components of atoms;
3. Organisms - the combination of molecules that work together or even with atoms that compose more elaborate interfaces;
4. Templates - create relationships between the organisms and others components through positions, placements and patterns of the pages but it doesn’t have any style, color or component rendered;
5. Pages - the navigate parts of the application and it’s where the components are distributed in one specific template;

### `components dependencies`
All dependencies are posted in alphabet and have nex structure:
1. Libraries
2. Components
3. Styles
4. Utils
5. Datas

### `styles`
Color, fonts and all common things takes from _variables.scss, _mixins.scss