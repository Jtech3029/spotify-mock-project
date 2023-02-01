import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDhZl4B-hs5izU5eeUeHzSba3XNiycRgXs",
  authDomain: "faketify-8d4b2.firebaseapp.com",
  projectId: "faketify-8d4b2",
  storageBucket: "faketify-8d4b2.appspot.com",
  messagingSenderId: "911037820654",
  appId: "1:911037820654:web:497ec29a85c53b8258cdff",
  measurementId: "G-YQB4S6FR1F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };