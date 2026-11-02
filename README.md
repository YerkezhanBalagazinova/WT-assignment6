# Assignment 6 — jQuery

## About the Project

In this assignment, I practiced using jQuery to make web pages more interactive. I learned how to select and change HTML elements, handle events, use different effects, and create simple animations.

The project contains five pages. All of them are connected through a navigation bar.

## Part 1 — Getting Started with jQuery (Tasks 0–1)

First, I connected jQuery using a CDN and checked if it was working with `$(document).ready()` and `console.log()`.

Then I practiced selecting HTML elements by ID, class, and tag. I used `.text()` and `.html()` to change their content and `.css()` to change their appearance.

## Part 2 — jQuery Effects (Tasks 2–4)

In this part, I worked with different jQuery effects.

- **Task 2:** Used `.hide()`, `.show()`, and `.toggle()` to control the visibility of a paragraph.
- **Task 3:** Used `.fadeIn()`, `.fadeOut()`, and `.fadeToggle()` to make an image appear and disappear smoothly.
- **Task 4:** Created a collapsible panel using `.slideUp()`, `.slideDown()`, and `.slideToggle()`.

## Part 3 — DOM Manipulation (Tasks 5–7)

This part focuses on working with HTML elements and their attributes.

- **Task 5:** Created a list where users can add items to the beginning or end and remove the last item.
- **Task 6:** Used `.attr()` to change an image's `src` and a link's `href`.
- **Task 7:** Created a simple form that displays Name and Email values in real time using `.val()` and `.text()`.

## Part 4 — Animations (Tasks 8–10)

I used jQuery's `.animate()` method to create different animations.

- **Task 8:** Made a square increase in size and move to another position.
- **Task 9:** Created sequential animations where the square moves right, moves down, shrinks, and returns to its original position.
- **Task 10:** Combined movement, size, and opacity changes into one animation.

## Part 5 — Mini Project (Task 11)

For the final part, I chose to create an **Interactive Accordion Menu**.

The page contains several questions about JavaScript and jQuery. Users can click on a question to see its answer and click again to hide it.

I used `.on("click")`, `$(this)`, `.next()`, and `.slideToggle()` to make the accordion work.

## Project Structure

- `index.html` — jQuery Setup and Selectors (Tasks 0–1)
- `effects.html` — Visibility, Fade, and Slide Effects (Tasks 2–4)
- `effects.js` — JavaScript for jQuery Effects
- `dom.html` — DOM Manipulation (Tasks 5–7)
- `dom.js` — JavaScript for DOM Manipulation
- `animations.html` — Animations (Tasks 8–10)
- `animations.js` — JavaScript for Animations
- `project.html` — Interactive Accordion Menu (Task 11)
- `project.js` — Accordion Menu functionality
- `style.css` — Website styling



## What I Learned

During this assignment, I learned how jQuery simplifies common JavaScript tasks. I practiced changing HTML content, modifying CSS styles, handling events, and creating animations.

The animation tasks helped me understand the difference between simultaneous and sequential animations. I also learned how to use jQuery effects in a small interactive project.

