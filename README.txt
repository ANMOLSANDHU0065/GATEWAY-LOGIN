GATEWAY WEBSITE — SETUP

FILES
- index.html: responsive login / create-account page
- messages.html: signed-in message form
- firebase-config.js: Firebase web configuration
- firestore.rules: profile privacy rules for Firestore

ALREADY CONFIGURED IN THESE FILES
- Firebase project: gateway-07
- Email/password sign-in
- Google sign-in
- Password visibility toggle
- Password strength meter
- Confirm password and minimum length validation
- Forgot password email
- Firebase profile document at users/{uid}
- Private profile rules (publish firestore.rules in Firebase Console > Firestore > Rules)
- Login guard, logout, responsive UI and dark mode on sign-in page

REQUIRED BEFORE TESTING
1. Firebase Console > Authentication > Sign-in method: ensure Email/Password and Google are Enabled.
2. Firebase Console > Firestore Database > Rules: paste firestore.rules and Publish.
3. For local testing, serve this folder using VS Code Live Server (do not open index.html as file://). Click Go Live.
4. In Firebase Console > Authentication > Settings > Authorized domains, ensure localhost is present for local testing. When deployed, add the deployment domain.
5. Web3Forms: go to https://web3forms.com/ and create an access key for the inbox that should receive messages. In messages.html, replace YOUR_WEB3FORMS_ACCESS_KEY with that key.
6. Test signup, sign out, sign in, Google sign in, forgot password, and message sending.

DEPLOYMENT
These files are static and can be hosted on Firebase Hosting or another static host. For Firebase Hosting, install Firebase CLI only when you are ready to deploy. Do not commit private service-account credentials. The Firebase web config API key is a client-side identifier; protect data using Auth and Firestore rules.

NOTE
The message form will deliberately show a setup message until a real Web3Forms access key is added. No fake successful send is shown.
