# STORYBOOK


A sandbox to build UI components in isolation, where we can mock the diferens **states** of the components (**styorys**), also provide testing and documentation

```BASH
npm run storybook
```

---

# TAILWIND CSS

It's utility first, with lots of classes to style the compoennts.


1. To install as a developer dependency(`-D`):

```BASH
npm install -D tailwindcss postcss autoprefixer
```

2. Run Tailwind CLI:
```BASH
npx tailwindcss init -p
```

And now we have the **postcss.config-js** and the **tailwind.config.js**

3. At **index.css**:

```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Inside `.storybook/preview.js` we add:

```JavaScript
import '../src/index.css';
```

5. Now we are able to use the `className` with the TailwindCSS clases.

---

# TESTING

- **unit testing**: testing a piece of code in isolation, when we test a component.

We are going to use the `test` **script**.

### Testing libraries

- Jest

- React: testing library

- User-event: APIs to replicate the interactive with the DOM

- Test example at **Button** component


1. To run the test:
```BASH
npm run test
```

2. To check if we are covering all the scenarios
```BASH
npm run test -- --coverage
```

3. Install **Addon**:

```BASH
npm install @storybook/addon-ally -D
```

And inside `.storybook/main.js` we now can see:

```JavaScript
addons: [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
  "@storybook/preset-create-react-app",
  "@storybook/addon-a11y",
],
```

And check the **Accessibility** and when we run `npm run storybook` we have **Accessibility Addon**

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
