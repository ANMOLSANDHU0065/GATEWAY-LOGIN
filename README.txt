# Gateway — Secure Messaging Web Application

**Gateway** is a modern, responsive web application designed to provide a clean user authentication experience and a simple messaging interface. Built using HTML, CSS, JavaScript, Firebase, and Web3Forms, the project focuses on usability, responsive design, and practical web development.

## About the Project

Gateway brings together user authentication and email-based message submission in one simple web application. It includes a login and account creation interface, a protected messaging dashboard, and a clean user interface with light and dark themes.

This project was developed as a practical way to explore frontend development, Firebase integration, form handling, and modern web application design.

## Key Features

- **User Authentication:** Login and account creation using Firebase Authentication.
- **Protected Dashboard:** Authentication checks to restrict access to the messaging page.
- **Messaging Interface:** A dedicated dashboard for composing and submitting messages.
- **Email Integration:** Web3Forms integration for processing message submissions.
- **Dark Mode:** Light and dark theme support.
- **Responsive Design:** An interface designed for desktop, tablet, and mobile screens.
- **Input Validation:** A defined message-length limit and form handling.
- **Session Handling:** An inactivity-based logout mechanism.
- **Database Integration:** Cloud Firestore initialization for database functionality.

## Technologies Used

- **HTML5** — Structures the web pages and application content.
- **CSS3** — Provides styling, responsive layouts, and theme customization.
- **JavaScript** — Handles interactive functionality and application logic.
- **Firebase Authentication** — Manages user authentication.
- **Cloud Firestore** — Provides NoSQL database integration.
- **Web3Forms** — Handles email-based form submissions.
- **Git & GitHub** — Used for version control and source code management.

## Project Structure

The project is organized into separate files for the user interface, authentication and database configuration, security rules, and documentation.

- **index.html** — Login and account creation page.
- **messages.html** — Messaging dashboard and form submission interface.
- **firebase-config.js** — Firebase initialization and service configuration.
- **firestore.rules** — Firestore database security rules.
- **README.md** — Project documentation.

## How It Works

Users begin at the Gateway login page, where they can access the authentication interface. After successful authentication, they can access the messaging dashboard.

The dashboard provides a message submission form that uses Web3Forms to process submissions through its configured email workflow. Firebase Authentication manages user access, while Cloud Firestore is integrated for database functionality.

## Security

Gateway uses Firebase Authentication for user access and includes a separate Firestore rules file for database security configuration.

Database permissions should be restricted through appropriate Firestore Security Rules. Firebase authorized domains should also be configured for deployment. Client-side authentication checks alone are not sufficient to secure database data.

## What I Learned

Through this project, I gained practical experience with:

- Building responsive web interfaces.
- Writing interactive JavaScript functionality.
- Integrating Firebase Authentication and Cloud Firestore.
- Connecting forms with Web3Forms.
- Organizing a web development project.
- Using Git and GitHub for version control.
- Understanding authentication and database security fundamentals.

## Future Improvements

- Persistent message history.
- User-specific message storage.
- Profile and account settings.
- Enhanced validation and error handling.
- Automated testing and deployment improvements.

## Project Repository

**GitHub:** [Gateway — GATEWAY-LOGIN](https://github.com/ANMOLSANDHU0065/GATEWAY-LOGIN)

## About the Author

**Anmol Singh Sandhu**

BCA Student | Frontend Web Developer | Learning Python | Aspiring Software Engineer

- **GitHub:** [ANMOLSANDHU0065](https://github.com/ANMOLSANDHU0065)
- **LinkedIn:** [Anmol Singh Sandhu](https://www.linkedin.com/in/anmol-sandhu-ch01as07/)

---

*Built with dedication by Anmol Singh Sandhu.*
