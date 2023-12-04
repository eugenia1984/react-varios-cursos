# <img width="48" height="48" src="https://img.icons8.com/office/48/react.png" alt="react"/> React course

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/monitor--v1.png" alt="monitor"/> Technologies

- <img width="28" height="28" src="https://img.icons8.com/color/28/html-5--v1.png" alt="html5"/> HTML5

- <img width="28" height="28" src="https://img.icons8.com/color/28/css3.png" alt="css3"/> CSS3

- <img width="28" height="28" src="https://img.icons8.com/color/28/javascript--v1.png" alt="javascript"/> JavaScript

- <img width="28" height="28" src="https://img.icons8.com/office/28/react.png" alt="react"/> React, react hooks: **useState**, **useRef**

- Storybook

- For **testing**: **Jest**, **React** (testing library), **User-event** (APIs to replicate the interactive with the DOM), **Accessibility Addon** (for accessibility).

---

## <img width="48" height="48" src="https://img.icons8.com/doodle/48/question-mark--v1.png" alt="question mark"/> What you will find?

- **01-hello-react**: A basic rendeing of React using a single html file

- **02-hello-react-webpack**: A basic app with a heading and a form, using webpack configuration

- **03-react-component-app**: A basic app with create-react-app(nowadays it's recomend it to use **Vite** instead). Using **Storybook** and **TailwindCSS** for styling.

---

## CONCEPTS

### 1 - State


The DATA FLOW is UNIDIRECTIONAL

```
state -> view -> action
 |                  |
 --------------------
```

- Functional components used to call stateless, but with the hook, the **functional components** manage the **state**

---

### 2 - Component driven development

Create the **UI**(User Interface) from **components**, thinking in the minumum representation, same as the BackEnd think in Micro services, here we think in **component**:

- **Fundational components**: button, input, link, image, etc

- **Composable components**: form, list, hero (compose with the fundational components)

- **Pages**: Home Page, Pricing, Profile

- **Web Apps**

Example:

```
Search...

 --
|  | Only show products in stock
 --

  Name      Price
     Fruits
Apple        $1
Dragonfruit  $1 
Passionfruit $2
     Vegetables
Spinach      $2         
```

5 components:

1. **FilterableProductTable**: SearchBar + ProductTable

2. **SearchBar**: input search + check-box

3. **ProductTable**: ProductCategory Row + Product Row

4. **ProductCategoryRow**: the heading of each category

5. **ProductRow**: the product with the price

### Benefits

- Faster development: each component will have less code

- Better maintenance: for developer and testing

- Communication: between the software developer team, product managers and designers (mocks in components)

- Reusability: it can include more cases

- Releases: it can be release independent

- Documentation: of the use cases of each component

---

[Thinking in React](https://react.dev/learn/thinking-in-react)

---

### 3 - Atomic Design

atoms -> molecules -> organism -> tamplates -> page

### Benefits:

- Improved Scalability and maintainability

- Enhanced reusability

- Improved consistency


### The five levels of Atomic Design

- **Atoms**: basic building blocks of the design system (buttons, inputs, icons)

- **Molecule**: combinations of atoms (form fields, header navigation)

- **Organism**: groups of molecules that function together as a unit (header, footer, sidebars)

- **Templates**: page-level structures that place organism within a layout

- **Pages**: complete, fucntional pages build using templates and organism

---

## 4 - STORYBOOK


A sandbox to build UI components in isolation, where we can mock the diferens **states** of the components (**styorys**), also provide testing and documentation

```BASH
npm run storybook
```

---

## 5 - TAILWINDCSS

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

## 6 - TESTING

- **unit testing**: testing a piece of code in isolation, when we test a component.

We are going to use the `test` **script**.

### Testing libraries

- Jest

- React: testing library

- User-event: APIs to replicate the interactive with the DOM

---