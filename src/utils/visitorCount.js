import { statsRef } from "../config/firebase.config";
import { getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

const visitorCount = {
  STORAGE_KEY: "portfolio_visit_timestamp",
  TIMEOUT_MS: 10 * 60 * 1000, // 10 minutes

  async recordVisit() {
    const now = Date.now();
    const lastVisit = parseInt(localStorage.getItem(this.STORAGE_KEY), 10);

    // If no record or timeout exceeded
    const isNewSession = !lastVisit || now - lastVisit > this.TIMEOUT_MS;

    if (!isNewSession) return false;

    try {
      const today = new Date().toISOString().split("T")[0];
      const docSnap = await getDoc(statsRef);

      const updateData = {
        totalVisitors: increment(1),
        [`dailyVisitors.${today}`]: increment(1),
        lastUpdated: new Date().toISOString(),
      };

      if (docSnap.exists()) {
        await updateDoc(statsRef, updateData);
      } else {
        await setDoc(statsRef, {
          ...updateData,
          dailyVisitors: { [today]: 1 },
        });
      }

      localStorage.setItem(this.STORAGE_KEY, now.toString());
      return true;
    } catch (error) {
      console.error("Visitor count error:", error);
      return false;
    }
  },
};

export default visitorCount;
