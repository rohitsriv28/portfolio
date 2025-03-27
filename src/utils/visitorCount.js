import { statsRef } from "../config/firebase.config";
import {
  getDoc,
  doc,
  setDoc,
  updateDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";

const visitorCount = {
  async recordVisit() {
    try {
      // Get current date in YYYY-MM-DD format
      const today = new Date().toISOString().split("T")[0];

      // Log the start of the process
      console.log("Starting visitor count recording...");
      console.log("Date:", today);

      // Fetch the current stats document
      const docSnap = await getDoc(statsRef);

      // Log document existence and current data
      console.log("Document exists:", docSnap.exists());
      if (docSnap.exists()) {
        console.log("Current document data:", docSnap.data());
      }

      // Prepare update object with increment
      const updateData = {
        totalVisitors: increment(1),
        // lastUpdated: serverTimestamp(),
      };

      // Prepare daily visitors update
      const dailyVisitorsUpdate = {
        [`dailyVisitors.${today}`]: increment(1),
      };

      // Combine updates
      const finalUpdateData = {
        ...updateData,
        ...dailyVisitorsUpdate,
      };

      // Log the update data
      console.log("Update data:", finalUpdateData);

      // Update the document
      if (docSnap.exists()) {
        await updateDoc(statsRef, finalUpdateData);
        console.log("Updated existing document");
      } else {
        // If document doesn't exist, create it with initial data
        await setDoc(statsRef, {
          totalVisitors: 1,
          dailyVisitors: { [today]: 1 },
          // lastUpdated: serverTimestamp(),
        });
        console.log("Created new document");
      }

      console.log("Visitor count updated successfully");
      return true;
    } catch (error) {
      console.error("Failed to update visitor count:", error);
      console.error("Error details:", {
        name: error.name,
        message: error.message,
        stack: error.stack,
      });
      return false;
    }
  },
};

export default visitorCount;
