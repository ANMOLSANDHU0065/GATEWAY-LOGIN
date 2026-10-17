# Gateway — Secure Messaging Web App

A modern, responsive web application built to provide a clean authentication experience and a simple messaging interface. Gateway combines Firebase Authentication, Cloud Firestore integration, and Web3Forms to bring together user access and email-based message submission.

<p align="center">
  <strong>Built with HTML, CSS, JavaScript, Firebase & Web3Forms</strong>
</p>

---

## 🌐 Project Overview

**Gateway** is a web development project designed with a focus on simplicity, usability, responsive design, and modern web technologies.

The application includes a login and account creation interface, a protected messaging dashboard, dark mode, and a message submission workflow.

The project was built to practise frontend development, authentication integration, Firebase services, form handling, and responsive UI design.

## ✨ Features

- **Login & Registration** — User authentication using Firebase Authentication.
- **Protected Dashboard** — Unauthenticated visitors are redirected to the login page.
- **Messaging Interface** — A dedicated dashboard for composing and submitting messages.
- **Email-Based Form Submission** — Web3Forms handles message form submissions.
- **Dark Mode** — Switch between light and dark themes.
- **Responsive Design** — Layout designed to adapt to desktop, tablet, and mobile screens.
- **Message Length Limit** — The messaging interface includes a 1,000-word limit.
- **Session Inactivity Handling** — An inactivity logout mechanism is configured for 15 minutes.
- **Firebase Integration** — Firebase Authentication and Cloud Firestore are initialized in the project.
- **Clean User Interface** — Focus on a simple layout, clear navigation, and smooth interactions.

> **Note:** Firebase Authentication and Firestore are integrated into the project. Actual data access security depends on the deployed Firebase Security Rules. Message submission uses Web3Forms; this does not by itself mean that messages are stored in Firestore.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Styling, responsive layouts, and themes |
| JavaScript (ES Modules) | Client-side logic and interactions |
| Firebase Authentication | User registration and login |
| Cloud Firestore | NoSQL database integration |
| Web3Forms | Email-based form submission |
| Git | Version control |
| GitHub | Source code hosting |

### Firebase Services

Gateway uses Firebase for its authentication and database integration.

- **Firebase Authentication:** Handles user authentication.
- **Cloud Firestore:** Provides the database integration layer.
- **Firebase Configuration:** Connects the web application to the Firebase project.

### Web3Forms Integration

Web3Forms is used to process the messaging form and deliver submissions through its configured email workflow.

The public access key is used by the frontend to submit the form. Private email account credentials should never be placed in client-side code.

## 🖥️ Application Pages

### 1. Login & Create Account — `index.html`

The entry page provides the login and registration interface. Firebase Authentication is used to manage user access.

### 2. Messaging Dashboard — `messages.html`

The dashboard provides the messaging interface, theme controls, and Web3Forms submission workflow. It also includes authentication checks and inactivity handling.

## 📁 Project Structure

```text
GATEWAY/
├── index.html           # Login and registration page
├── messages.html        # Messaging dashboard
├── firebase-config.js   # Firebase initialization
├── firestore.rules      # Firestore security rules
└── README.md            # Project documentation
```

## ⚙️ Getting Started

### Prerequisites

- A modern web browser
- A code editor such as Visual Studio Code
- A Firebase project
- A Web3Forms account and configured access key

### 1. Clone the Repository

```bash
git clone https://github.com/ANMOLSANDHU0065/GATEWAY-LOGIN.git
```

### 2. Open the Project

```bash
cd GATEWAY-LOGIN
```

Open the project folder in Visual Studio Code.

### 3. Configure Firebase

1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Select your Firebase project or create a new one.
3. Register a web application.
4. Enable **Email/Password** under Authentication sign-in providers if you use email/password authentication.
5. Configure Cloud Firestore if the application needs database access.
6. Check that `firebase-config.js` contains the correct web app configuration.
7. Review and deploy the appropriate Firestore Security Rules.

### 4. Configure Web3Forms

1. Visit [Web3Forms](https://web3forms.com/).
2. Create or select your form configuration.
3. Configure the destination email and obtain the access key.
4. Add the key to the appropriate configuration in `messages.html`.
5. Test a submission to confirm that the configured email workflow works.

**Security reminder:** Browser-side Firebase configuration and Web3Forms access keys are not equivalent to private server credentials. Never publish Firebase service-account private keys, passwords, or other server secrets. Configure Firebase Security Rules and authorized domains appropriately.

### 5. Run Locally

Because the project uses JavaScript ES modules, open the folder through a local development server rather than relying on a direct `file://` URL.

In Visual Studio Code, you can use the **Live Server** extension and open `index.html` through its local server URL.

## 🔐 Security Considerations

- Firebase Authentication is used for account access.
- The dashboard checks authentication before displaying the protected page.
- Firestore Security Rules should restrict database operations to authorized users.
- Firebase authorized domains should be configured for local development and deployment.
- Never include service-account private keys, passwords, or secret credentials in a public repository.
- Client-side checks are not a substitute for server-side authorization and database security rules.

## 🚀 Deployment

The project source code is available on GitHub:

**Repository:** [ANMOLSANDHU0065/GATEWAY-LOGIN](https://github.com/ANMOLSANDHU0065/GATEWAY-LOGIN)

The static frontend can be deployed using a static hosting provider such as GitHub Pages, Firebase Hosting, or another suitable hosting service.

Before deployment, configure Firebase Authentication authorized domains, verify Firestore Security Rules, and test the Web3Forms submission workflow on the deployed domain.

## 🎯 Learning Outcomes

This project provided practical experience with:

- Building responsive web interfaces using HTML and CSS.
- Implementing client-side functionality using JavaScript modules.
- Integrating Firebase Authentication.
- Connecting a frontend application to Cloud Firestore.
- Handling email-based form submissions with Web3Forms.
- Managing source code with Git and GitHub.
- Thinking about authentication, database permissions, and frontend security.

## 🔮 Future Improvements

- Add persistent message history if required.
- Implement user-specific message storage with appropriate Firestore rules.
- Add profile settings and account management.
- Improve form validation and submission feedback.
- Add automated testing and deployment workflows.
- Expand accessibility and cross-browser testing.

## 👨‍💻 Author

**Anmol Singh Sandhu**

BCA Student | Frontend Web Developer | Learning Python | Aspiring Software Engineer

- **GitHub:** [@ANMOLSANDHU0065](https://github.com/ANMOLSANDHU0065)
- **LinkedIn:** [Anmol Singh Sandhu](https://www.linkedin.com/in/anmol-sandhu-ch01as07/)

## 📄 License

This project is available for learning and portfolio purposes. If you plan to reuse or distribute the source code, consider adding a `LICENSE` file that specifies the applicable terms.

---

<p align="center">
  Made with ❤️ by Anmol Singh Sandhu
</p>
