# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

- [Desktop](./screenshots/desktop.png)
- [Mobile](./screenshots/mobile.png)

### Links

- Solution URL: [Click me](https://github.com/arudiansaha/todo-app)
- Live Site URL: [Click me](https://todo-app-eight-chi.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org) - JS library
- [Vite](https://vitejs.dev) - Next Generation Frontend Tooling
- [TailwindCSS](https://tailwindcss.com) - CSS Framework

### What I learned

On this challenge I learned how to use react hooks and using localStorage, and make decision about type on typescript.

Here some of my codes:

```js
export default function themeSwitcher(mode: string) {
  if (mode === 'light') return 'dark';
  return 'light';
}
```

### Continued development

For future development I wish it using api for CRUD.

### Useful resources

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/) - Help you to understand type on react.
- [CSS Reset from Josh Comeau](https://www.joshwcomeau.com/css/custom-css-reset/) - Help you to reset css.

## Author

- Website - [Blog](https://blog-arudiansaha.vercel.app)
- Frontend Mentor - [@arudiansaha](https://www.frontendmentor.io/profile/arudiansaha)
- Twitter - [@arudiansaha](https://www.twitter.com/arudiansaha)
- LinkedIn - [Rizky Ardiansyah](https://linkedin.com/in/ky-ardiansyah)

## Acknowledgments

### Big Thanks

- [StackOverflow](https://stackoverflow.com/) - An Angel ;).