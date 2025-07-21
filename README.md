# Firebase Auth React App

A React application with Firebase Authentication that allows users to register, log in, and make authenticated API calls to a backend service. This is intended as a "quick start" when making MVPs.

## Features

- User registration and login with Firebase Auth
- Protected routes for authenticated users
- Automatic token management for API calls
- Clean, responsive UI with modern styling
- TypeScript support for better development experience

## Setup Instructions

### 1. Firebase Configuration

1. Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Authentication and add Email/Password as a sign-in method
3. Copy the Firebase configuration from Project Settings > General > Your apps
4. Create a `.env` file in the root directory (copy from `.env.example`)
5. Add your Firebase configuration values to the `.env` file:

```
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
REACT_APP_FIREBASE_APP_ID=your_app_id_here
```

### 2. Backend API Configuration (Optional)

If you have a backend API, set the base URL in your `.env` file:
```
REACT_APP_API_BASE_URL=http://localhost:3001/api
```

The app includes an HTTP client (`src/services/apiClient.ts`) that automatically adds Firebase ID tokens to requests.

### 3. Install Dependencies

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Project Structure

```
src/
├── components/           # React components
│   ├── Dashboard.tsx    # Protected dashboard page
│   ├── Login.tsx        # Login form component
│   ├── PrivateRoute.tsx # Route protection wrapper
│   └── Signup.tsx       # Registration form component
├── contexts/            # React contexts
│   └── AuthContext.tsx  # Authentication context and hooks
├── config/              # Configuration files
│   └── firebase.ts      # Firebase configuration and initialization
├── services/            # External service integrations
│   └── apiClient.ts     # HTTP client with automatic auth headers
├── App.tsx              # Main application component with routing
├── App.css              # Application styling
└── index.tsx            # Application entry point
```

## Backend Integration

The app is designed to work with any backend that can verify Firebase ID tokens. Your backend should:

1. Verify the Firebase ID token from the `Authorization: Bearer <token>` header
2. Extract user information from the verified token
3. Use the user's Firebase UID to identify them in your system

For Firebase Admin SDK integration in your backend, refer to the [Firebase Admin documentation](https://firebase.google.com/docs/admin).

## Learn More

- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [React Router Documentation](https://reactrouter.com/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
