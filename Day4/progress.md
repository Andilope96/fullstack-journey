# Day 4

## Activities
Today I focused on completing the foundational topics of JavaScript Objects, Classes & Inheritance, and DOM Manipulation. I worked through official documentation, video tutorials, and multiple hands-on exercises. This concludes the JavaScript + DOM basics phase of my Fullstack Journey.

## Summary

### JavaScript Objects
**Covered topics:**
- Object creation using literals
- Accessing properties (dot & bracket notation)
- Adding, modifying, deleting properties
- Nested objects
- Looping through objects using `for...in`

**Resources used:**
- https://javascript.info/object-basics
- https://javascript.info/object

**Key insights:**
- Objects are the main structure for modeling real-world entities.
- Bracket notation allows dynamic property access.
- `for...in` iterates over all enumerable properties.

**Exercise:** Created a `user` object and practiced updating values dynamically.

---

### JavaScript Classes & Inheritance
**Covered topics:**
- `class` syntax
- `constructor()`
- Instance methods
- Inheritance with `extends`
- Using `super()` inside child constructors

**Resources used:**
- https://javascript.info/classes

**Key insights:**
- Classes enable a structured, object-oriented approach.
- Inheritance allows reuse of base functionality.
- Understanding constructor chaining (`super()`) is essential.

**Exercise:** Implemented `Animal`, `Cat`, and `Dog` classes with shared and unique properties.

---

### DOM Fundamentals
**Covered topics:**
- Selecting elements (`getElementById`, `querySelector`)
- Creating DOM nodes (`createElement`)
- Appending, removing, modifying elements
- Editing attributes and text content
- Handling events and connecting logic to user actions

**Resources used:**
- https://javascript.info/document
- https://javascript.info/dom-nodes
- https://javascript.info/modifying-document
- https://www.w3schools.com/js/js_htmldom_events.asp
- https://www.youtube.com/watch?v=Wy1ODjtQ1G0
- https://www.youtube.com/watch?v=o-p5X149BVM&t=553s

**Key insights:**
- DOM is a tree structure representing the webpage.
- JavaScript can dynamically update elements to build interactive interfaces.
- Event listeners allow real-time UI interaction.

---

### Mini-Browser Project: Favorite Movies List
**Features implemented:**
- Input field to add movies
- Button adds movie to the list
- Each list item contains a remove button
- DOM changes occur dynamically via JavaScript

This project reinforced:
- DOM creation & manipulation
- Event-driven logic
- Clean, structured JS functions

---

## To Review Later
- Deepen understanding of **Classes & Inheritance**
- More practice with DOM Manipulation (interactive UIs)
- Additional object-oriented practice with nested structures
- https://www.youtube.com/@TraversyMedia
- https://www.youtube.com/watch?v=ZDRZvFNK-ek

### Additional Recommended Resources
**Classes & OOP:**
- https://www.youtube.com/watch?v=2ZphE5HcQPQ
- https://www.youtube.com/watch?v=PFmuCDHHpwk
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

**DOM Manipulation:**
- https://www.youtube.com/watch?v=0ik6X4DJKCc
- https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
- https://www.javascripttutorial.net/javascript-dom/

---

## Next Steps – Day 5 (6 hours)

### 1. ES6 Modules Fundamentals (2 hours)

**Goals:**
- Understand why modules exist and how they improve structure.
- Learn `export`, `export default`, and different `import` styles.
- Use `type="module"` in your script tag.

**Articles:**
- Web Dev Simplified – ES6 Modules (blog)  
  https://blog.webdevsimplified.com/2021-11/es6-modules/  
- MDN – JavaScript modules (guide)  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules  

**Video tutorials:**
- Web Dev Simplified – *JavaScript ES6 Modules*  
  https://www.youtube.com/watch?v=cRHQNNcYf6s  
- dcode – *Learn JavaScript ES6 Modules in 6 minutes!*  
  https://www.youtube.com/watch?v=fl-_6d18DN0  

**Practice:**
- Create a `utils.js` module with:
  - `capitalize(text)`
  - `randomId()`
- Export both functions and import them in `main.js`.
- Test them in the browser console or your existing project.


### 2. Project Structure with Modules (1.5 hours)

**Goals:**
- Organize your app into separate files for data, view, and logic.
- Keep `main.js` as a small entry file that wires everything together.

**Suggested structure:**
```text
movies-app/
  index.html
  /src/
    main.js
    model.js
    view.js
    controller.js
```

**Responsibilities:**
- `model.js` – movie list data + functions to add/remove movies  
- `view.js` – DOM rendering (create list items, clear list, etc.)  
- `controller.js` – event handlers (button clicks, delete clicks)  
- `main.js` – imports model, view, controller and initializes the app  

**Video support (general JS app/project thinking):**
- Web Dev Simplified – *Modern JavaScript ES6+ Tutorials* (playlist)  
  https://www.youtube.com/playlist?list=PLZlA0Gpn_vH-0FlQnruw2rd1HuiYJHHkm  


### 3. Refactor: Favorite Movies App into Modules (1.5 hours)

**Goals:**
- Move your current “Favorite Movies List” app into the new structure.
- Use imports/exports instead of keeping everything in one file.

**Steps:**
- Move the movie array and related functions into `model.js`.
- Move DOM-manipulation functions (rendering the list, creating items) into `view.js`.
- Move event listeners and handler logic into `controller.js`.
- Update `index.html` to load only `main.js` with `type="module"`:

```html
<script type="module" src="./src/main.js"></script>
```

- In `main.js`, import what you need from `model.js`, `view.js`, and `controller.js` and start the app.


### 4. Event Delegation Practice (1 hour)

**Goals:**
- Understand event bubbling and delegation.
- Replace one-listener-per-button with a single delegated listener.

**Articles:**
- Event Delegation – JavaScript in Plain English  
  https://javascript.plainenglish.io/event-delegation-a-performant-way-to-handle-events-in-javascript-e968783a3446  

**Video tutorials:**
- Web Dev Simplified – *Learn Event Delegation In 10 Minutes*  
  https://www.youtube.com/watch?v=cOoP8-NPLSo  
- JavaScript DOM Tutorial – *What is Event Delegation?*  
  https://www.youtube.com/watch?v=pKzf80F3O0U  

**Practice:**
- In your movies list:
  - Add one `click` listener on the `<ul>` or container.
  - Use `event.target` to detect if a delete button was clicked.
  - Remove the correct `<li>` and update the model.
