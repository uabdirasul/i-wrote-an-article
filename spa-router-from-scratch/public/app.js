const rootDiv = document.getElementById("root");

// Declare variables for home, about & contact HTML pages
let home = "";
let about = "";
let contact = "";

// Define routes globally
let routes = {};

// Load page content asynchronously
const loadPage = async (page) => {
  try {
    const response = await fetch(page);
    if (!response.ok) {
      throw new Error(`Failed to load ${page}: ${response.statusText}`);
    }
    let result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
    return "<h1>Page Not Found</h1>";
  }
};

// Load all pages and initialize routes
const loadAllPages = async () => {
  home = await loadPage("home.html");
  about = await loadPage("about.html");
  contact = await loadPage("contact.html");

  // Initialize routes after pages are loaded
  routes = {
    "/": home,
    "/contact": contact,
    "/about": about
  };
};

// Main function to load pages
const main = async () => {
  await loadAllPages();

  // Check the current pathname and load the appropriate content
  const currentPath = window.location.pathname;
  rootDiv.innerHTML = routes[currentPath] || "<h1>Page Not Found</h1>"; // Set content based on current URL
};

// Invoke the main function
main();

/**
 *
 * @param {String} pathname - Pass the 'pathname' passed from onClick function of the link (index.html)
 * The function is invoked when any link is clicked in the HTML.
 * The onClick event on the HTML invokes the onNavClick & passes the pathname as param
 */
const onNavClick = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname] || "<h1>Page Not Found</h1>";
};

// Event listener for back/forward navigation
window.addEventListener("popstate", () => {
  const currentPath = window.location.pathname;
  rootDiv.innerHTML = routes[currentPath] || "<h1>Page Not Found</h1>";
});
