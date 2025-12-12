// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Create references to your collections
const profileRef = collection(db, "profile");
const projectsRef = collection(doc(profileRef, "projects"), "items");
const statsRef = doc(db, "profile", "stats"); // More direct reference

// Remove the automatic initialization and export initializeStatsDocument separately
export const initializeStatsDocument = async () => {
  try {
    await setDoc(
      statsRef,
      {
        totalVisitors: 0,
        dailyVisitors: {},
        // lastUpdated: null,
      },
      { merge: true }
    );
    // console.log("Stats document initialized successfully.");
  } catch (error) {
    console.error("Error initializing stats document:", error);
    throw error; // Re-throw to handle in calling code
  }
};

export { db, projectsRef, statsRef, firebaseConfig };
