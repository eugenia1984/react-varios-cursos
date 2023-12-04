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

## VRT (Visual Regression Test) with Chromatic

[**Chromatic**](https://www.chromatic.com/)

1. Link with **GitHub** account

2. Choose from GitHub

3. In terminal to get the Chromatic package:

```BASH
npm install --save-dev chromatic
```

4. Publish your Storybook. On the command line, publish to Chromatic’s secure CDN for the first time with the following command:

```BASH
npx chromatic --project-token=chpt_5cb12d78311591f
```

You will need to put your token. Now chromatic will generate the steps. And now at `package.json` we can see a nw `script`: `chromatic`

---

## CI/CD

CI/CD: Continuous Integration / Continuous Development

- **Continuous Integration**: Pipeline with: `code -> build -> test`

- **Continuous Delivery**: Pipeline with: `code -> build -> test -> release -> deploy`

### Benefits

- Improve Software Quality, because we already have test

- Improve Developer Productivity

- Improve Feedback

- Faster Releases & Updates


### GitHub Actions

It's a CI/CD in GitHub

1. We need to have a `repository`

2. We have a task `Actions` and a`Workflow`

3. All the configuration at: `.github/workflows/cy.yml`

4. At GitHub / Actions we can add a new **badge** and add in the README.md file.

5. Publish Storybook with VTRs. In the repository, in the `secret` we need to add the **token**


```
name: CI workflow

# Events
on:push

# List of jobs
job:
  test:
    # runner
    # the virtual enviroment where the pipiline run
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x]

    # Job steps
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
        with: 
          fetch-depth: 0 # fetch full history

      - name: Set up Node.js ${{ matrix.node-version}}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version}}

      - name: Install dependencies
        run: npm install

      - name: Run the test ¬code coverage
        run: npm test  -- --coverage

      - name: Upload code coverage to Codecov
        uses: codecov/codecov-actions@v2

      - name: Publish to Chromatic
        uses: chrmaui/action@v1
        with:
          projectToken: ${{secrets.CHROMATIC_ROJECT_TOKEN}}  
      
```

---

## React Tools & Recomendations


### What is need for the best Backend for React?

To create a fully functional application, developers need a robust backend system that handles data storage, processing and communication between the frontend and the server.

- **Node.js**:

Advantages:

-Single language for both Frontend and Backend

-High performance

-Larafe ecosystem

-Strong community support

-Scalability

Disadvantages:

-Limited CPU-intensive task

-Callback hell

-Learning curve


- **django** for Python:

Advantages:

-Batteries-included philosophy

-Scalability

-Strong security

-Large community

-Excellent documentation


Disadvantages:

-Monolitic architecture vs micro services

-Less flexibility

-Learning curves

- **Ruby on Rails**:

Advantages:

-Rapid development

-DRY and Convention over Configuration

-Active Record ORM

-Large Ecosystem

-Strong community

Disadvantages:

-Performance

-Learning curve

-Declining populatiry

-Less suitable for microserices (monolitic architecture)

- **NEXT.js**

Advantages:

-Server-side rendering (SSR): improving initial page performance

-Static site generatio (SSG): pre rendr the page, better performance

-Automatic code splitting: small bundles

-API routes

-Fast refresh

-Incremental static regeneration (ISR): update static content with need to rebuild the hole application

Disadvantages:

-Learning curve

-Limited customization

-Complexity

-SSR and SSG limitations

- **ASP.NET Core**

Advantages:

-High performance

-Cross-platform

-Modular architecture

-Built-in dependency injection

-Strong security

-Large ecosystem

Disadvantages:

-Learnign curve

-Less popular in the web community

-Licensing costs

-Pottentially lower community engagement

- **Firebase** (by Google):

Advantages:

-Real-tim database

-Authentication

-Storage

-Hosting

-Serverless architecture

-Cloud Functions

Disadvantages:

-Vendor lock-in

-Limited query capabilities

-Cost

-Less control

-Scalability challenge

- **Spring**:

Advantages:

-Rapid development

-Embedded web server

.Standalone applications

-Wide range of integrations

-Spring ecosystem

-Microservices support

Disadvantages:

-Learning curve

-Memory consumtion

-Slower start up

-Complexity


-> Additional BAckend options:

- Gatsby

- Prisma: open source database

- Strapi

- GraphQL

---

## CHAT GPT

Like a seasoned coder, ChatGPT knows the syntax, the rules and even some meat coding tricks.

But navigating the landscape of AI in programming can be tricky.

1. https://chat.openai.com/

2. Sign in if you are a user

3. The interface is a simple chat box where you can type your queries or paste code snippets.

4. Now let's take a look at a few practical examples.

- **Example 1**: uppose you've written a python function, but you're not quite sure if it's the most efficient way to solve the problem. Here's what you could ask.

``Hey, I've written this function to sort a list in Python. Can you suggest any improvements?``

Then paste your function.


- **Example 2**: Stuck on an error message. No problem. Asked ChatGPT to help you out and seeing the type error unsupported operand type error in my python code.

``What does this mean?``

Paste your code next and hit send.

- **Example 3**: ChatGPT is also great for learning new coding concepts. You can ask, could you explain what a dictionary is in Python and provide an example of how to use it? But perhaps you want to practice coding problems for an upcoming interview.

Simply type in your practice problem.

``Can you help me solve this problem?``

Write a function in Java that checks if a string is a palindrome.

Remember ChatGPT is versatile and adaptable.

Feel free to ask any coding or programming related questions you have.

The more you interact, the more you'll discover how much this AI can enhance your coding skills.



- **Example 4**: Having got our feet wet with ChatGPT, it's time to dive deeper and see how this tool can assist us with more advanced programming tasks. Ever wished you had a coding buddy to bounce ideas off or to help brainstorm solutions? Well, ChatGPT can play that role.

Let's say you're designing a complex algorithm and you're unsure about the logic flow.

Pose your problem as a question to ChatGPT like so, and try to design a recommendation algorithm for a movie app.

I'm considering using collaborative filtering.

Can you outline the steps I might need to take?

ChatGPT can even be used for learning and understanding new programming languages.

- **Example 5**: Let's say you're familiar with Python but want to pick up JavaScript. ``You can ask, Can you show me how to write a Hello World program in JavaScript?``

- **Example 6**: Or perhaps you're trying to grasp a tricky concept in a new language as and learning. Ruby But I'm struggling to understand mixins. ``Can you explain how they work and provide an example?``

- **Example 7**: ChatGPT also excels in helping with data analysis and visualization tasks. For instance, you could ask, I have a dataset in a Pandas data frame and I want to visualize the data distribution.

``Can you suggest an appropriate Seaborn plot and how to create it?``

Moreover, don't forget that ChatGPT can be of immense help in software debugging. If you have a piece of code that isn't working as expected, share it with ChatGPT and ask.

``This JavaScript function isn't returning the expected output. Can you spot any errors?``

- **Example 8**: In essence, ChatGPT can act as a full fledged AI programming assistant, aiding in complex tasks and helping you to become a more efficient and confident coder.

- **Example 9**: Now that we're more familiar with the vast potential of ChatGPT as a programming assistant, it's essential to be aware of the precautions to ensure smooth sailing.

Let's delve into some common pitfalls and how to avoid them.

Firstly, while ChatGPT can provide impressive insights and solutions, it's critical to remember that it's not infallible.

Always double check the solutions and suggestions it provides, especially for complex tasks.

For instance, if ChatGPT suggests a code optimization, verify it by saying Can you provide the pros and cons of this optimized solution compared to my original code?

Secondly, while ChatGPT is a powerful tool for learning new programming languages or concepts, it's best used as a supplement rather than a substitute for comprehensive learning resources.

For example, after asking about a new concept, verify and expand your understanding by cross referencing with trusted educational resources.

Next, remember that even though ChatGPT can provide assistance with coding problems, it's still an AI model and doesn't fully understand your specific project requirements.

When you ask for help with code, provide as much context as possible to get the most accurate and helpful response.

Lastly, never share sensitive data or confidential code with ChatGPT.

While OpenAI has strict privacy policies, it's best practice to avoid discussing proprietary information or data.

Please help me understand why this python function to connect to my company's private database isn't working.

This is a big no no.

Instead abstract out the sensitive parts and then ask your question By being mindful of these points, you can make your journey with ChatGPT a productive and enjoyable one.

We've navigated the landscape of using ChatGPT for coding and programming, revealing its potential as a versatile coding assistant from simple tasks to complex problem solving.

ChatGPT is there to aid and guide you.

But remember, while it's a powerful tool, it isn't infallible.

Always use a responsibly, ethically, and in conjunction with your coding skills.

The AI is transforming the coding world and as programmers we have front row seats to this exciting development.

Thank you for tuning in.

Keep learning and happy coding.


---

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

##### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

##### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

##### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

##### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

##### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---
