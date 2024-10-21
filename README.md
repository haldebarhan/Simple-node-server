# Overview

In this project, I created a simple web application aimed at enhancing my skills as a software engineer. The purpose of this app is to build a dynamic web experience where users can interact with a form, submit information, and see the results displayed dynamically. This project helps me practice key web development concepts such as server-side rendering, routing, and database interaction.

The web app is built using Node.js and Express, and data is stored in MongoDB. Users can submit personal details, which are then displayed dynamically on a separate results page. The app also includes a dynamically generated page based on data stored in MongoDB.

To start the app on your local computer, follow these steps:

1. Clone the repository.
1. Run **npm install** to install the necessary dependencies.
1. Start your MongoDB server on **localhost:27017**.
1. Run **node server.js** to start the test server.
1. Open your browser and navigate to **http://localhost:3000** to access the first page of the web app.

The purpose of writing this software is to solidify my understanding of web development principles and back-end architecture while building an interactive web app.

[Software Demo Video](https://youtu.be/jC3QntZoh_A)

# Web Pages

1. **Index Page (/):** This is the home page of the web app. It contains a form where users can enter their name and email address. Once the form is submitted, the data is processed by the server, stored in the MongoDB database, and users are redirected to a result page.

1. **Result Page (/submit):** After submitting the form, this page displays the name and email address entered by the user, confirming the data submission.

1. **Dynamic Page (/dynamic):** This page is dynamically generated using data stored in the MongoDB database. It displays a list of all previously submitted entries, allowing users to see the cumulative data.

The app transitions from the index page to the result page upon form submission, and from there, users can navigate to the dynamic page to see all entries. The dynamic content on the result and dynamic pages is generated based on user input and database content.

# Development Environment

- Development Tools: VSCode, Node.js, MongoDB

- Programming Language: JavaScript
- Libraries Used: Express.js for server management, Mongoose for MongoDB interaction, EJS for templating, Body-parser for form data handling

# Useful Websites

- [Express Documentation](https://expressjs.com/)
- [Mongoose Documatation](https://mongoosejs.com/docs/)
- [EJS Templating Documentation](https://ejs.co/)

# Future Work

- Add input validation for form fields to ensure proper data submission.
- Implement user authentication to restrict access to certain pages.
- Improve the UI design to make the app more visually appealing.
- Add pagination or sorting features to the dynamic page for better data presentation.
