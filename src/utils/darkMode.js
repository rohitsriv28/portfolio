/**
 * Dark Mode Utility
 * Handles dark mode toggle functionality with localStorage persistence
 */

// Store key for localStorage
const DARK_MODE_STORAGE_KEY = "darkMode";

/**
 * Initialize dark mode based on:
 * 1. User's previously saved preference in localStorage
 * 2. System preference (if no saved preference exists)
 */
export const initDarkMode = () => {
  // Check for saved preference
  const savedMode = localStorage.getItem(DARK_MODE_STORAGE_KEY);

  let isDarkMode;

  // If we have a saved preference, use it
  if (savedMode !== null) {
    isDarkMode = JSON.parse(savedMode);
  } else {
    // Otherwise, use system preference
    isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // Apply initial dark mode state
  applyDarkMode(isDarkMode);

  return isDarkMode;
};

/**
 * Toggle dark mode state
 * @param {boolean} currentState - Current dark mode state
 * @returns {boolean} New dark mode state
 */
export const toggleDarkMode = (currentState) => {
  const newState = !currentState;

  // Apply the change to the DOM
  applyDarkMode(newState);

  // Save preference to localStorage
  localStorage.setItem(DARK_MODE_STORAGE_KEY, JSON.stringify(newState));
  return newState;
};

/**
 * Apply dark mode class to document and save preference
 * @param {boolean} isDarkMode - Whether dark mode should be enabled
 */
// Update applyDarkMode to force a DOM update
export const applyDarkMode = (isDarkMode) => {
  // Force a small DOM change to ensure re-render
  document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";

  // Apply or remove class from html element
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
    // Double-check it's really gone
    setTimeout(() => {
      if (document.documentElement.classList.contains("dark")) {
        console.warn("Dark class wasn't removed properly, forcing removal");
        document.documentElement.classList.remove("dark");
      }
    }, 50);
  }

  // Save preference to localStorage
  localStorage.setItem(DARK_MODE_STORAGE_KEY, JSON.stringify(isDarkMode));
};

/**
 * Listen for system theme changes and update if user hasn't set preference
 */
export const setupSystemThemeListener = () => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleChange = (e) => {
    // Only apply system preference if user hasn't explicitly set a preference
    if (localStorage.getItem(DARK_MODE_STORAGE_KEY) === null) {
      applyDarkMode(e.matches);
    }
  };

  // Add listener for theme changes
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handleChange);
  } else {
    // Fallback for older browsers
    mediaQuery.addListener(handleChange);
  }

  // Return cleanup function
  return () => {
    if (mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener("change", handleChange);
    } else {
      mediaQuery.removeListener(handleChange);
    }
  };
};
