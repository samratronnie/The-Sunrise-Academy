import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration provided by the user
const firebaseConfig = {
  apiKey: "AIzaSyCqdUYLtEZXg0nruZF_TBjiWTqpO4GEuFQ",
  authDomain: "bengal-youth-development.firebaseapp.com",
  projectId: "bengal-youth-development",
  storageBucket: "bengal-youth-development.firebasestorage.app",
  messagingSenderId: "763724640852",
  appId: "1:763724640852:web:081d28879baa1317a073c1",
  measurementId: "G-2300FZ9CGP"
};

// Initialize Firebase app (singleton check)
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase Authentication Only (strictly no Firestore or Storage per requirements)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Initialize Analytics conditionally where supported (browser environment)
export let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {
    // Ignore analytics unsupported environment
  });
}
