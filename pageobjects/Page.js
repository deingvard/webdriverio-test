/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {

  waitUsingFixedTimout(time) {
    console.log("Pausing for: " + time + " seconds.");
    browser.pause(time);
  }
}
