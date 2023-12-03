# <img width="48" height="48" src="https://img.icons8.com/office/48/react.png" alt="react"/> React course

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/monitor--v1.png" alt="monitor"/> Technologies

- <img width="28" height="28" src="https://img.icons8.com/color/28/html-5--v1.png" alt="html5"/> HTML5

- <img width="28" height="28" src="https://img.icons8.com/color/28/css3.png" alt="css3"/> CSS3

- <img width="28" height="28" src="https://img.icons8.com/color/28/javascript--v1.png" alt="javascript"/> JavaScript

- <img width="28" height="28" src="https://img.icons8.com/office/28/react.png" alt="react"/> React

---

## <img width="48" height="48" src="https://img.icons8.com/doodle/48/question-mark--v1.png" alt="question mark"/> What you will find?

- 01-hello-react: A basic rendeingof React using a single html file

- 02-hello-react

---

## Concepts

### State


The DATA FLOW is UNIDIRECTIONAL

```
state -> view -> action
 |                  |
 --------------------
```

- Functional components used to call stateless, but with the hook, the **functional components** manage the **state**

---

# Component driven development

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

## Atomic Design

atoms -> molecules -> organism -> tamplates -> page

---