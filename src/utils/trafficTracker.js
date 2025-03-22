/**
 * Site Traffic Tracker
 * A lightweight utility to track daily page views and calculate total traffic
 */

const trafficTracker = {
  /**
   * Records a page view for the current day
   */
  recordView: function () {
    const today = this.getTodayString();
    const trafficData = this.getTrafficData();

    // Initialize or increment today's count
    if (!trafficData[today]) {
      trafficData[today] = 1;
    } else {
      trafficData[today] += 1;
    }

    // Save updated data
    localStorage.setItem("siteTrafficData", JSON.stringify(trafficData));

    return trafficData[today]; // Return today's count
  },

  /**
   * Get the current date in YYYY-MM-DD format
   */
  getTodayString: function () {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  },

  /**
   * Retrieves all traffic data from localStorage
   */
  getTrafficData: function () {
    const data = localStorage.getItem("siteTrafficData");
    return data ? JSON.parse(data) : {};
  },

  /**
   * Gets the view count for a specific date
   * @param {string} dateString - Date in YYYY-MM-DD format (defaults to today)
   */
  getViewsForDate: function (dateString = this.getTodayString()) {
    const trafficData = this.getTrafficData();
    return trafficData[dateString] || 0;
  },

  /**
   * Gets today's view count
   */
  getTodayViews: function () {
    return this.getViewsForDate();
  },

  /**
   * Calculates total views across all days
   */
  getTotalViews: function () {
    const trafficData = this.getTrafficData();
    return Object.values(trafficData).reduce((sum, views) => sum + views, 0);
  },

  /**
   * Gets the last N days of traffic data
   * @param {number} days - Number of days to retrieve
   */
  getRecentTraffic: function (days = 7) {
    const trafficData = this.getTrafficData();

    // Convert to array sorted by date
    const dataArray = Object.entries(trafficData)
      .map(([date, views]) => ({ date, views }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, days);

    return dataArray;
  },

  /**
   * Clears all traffic data
   */
  resetData: function () {
    localStorage.removeItem("siteTrafficData");
    return true;
  },
};

// Initialize traffic tracking when the script loads
document.addEventListener("DOMContentLoaded", function () {
  trafficTracker.recordView();
  console.log(
    `Page view recorded. Today: ${trafficTracker.getTodayViews()} views. Total: ${trafficTracker.getTotalViews()} views.`
  );
});

export default trafficTracker;
