import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "smart-be3d4.firebaseapp.com",
  projectId: "smart-be3d4",
  storageBucket: "smart-be3d4.appspot.com",
  messagingSenderId: "693054060709",
  appId: "1:693054060709:web:f6e9f11a0808b9a0e5754c",
  measurementId: "G-WFGRD54S55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
