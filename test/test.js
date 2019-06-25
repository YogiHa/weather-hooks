var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver");

const serverUri = "http://localhost:3000/#";
const appTitle = "WethWhat?";

var browser = new webdriver.Builder()
 .usingServer()
 .withCapabilities({ browserName: "chrome" })
 .build();

 function logTitle() {
 return new Promise((resolve, reject) => {
  browser.getTitle().then(function(title) {
   resolve(title);
  });
 });
}

describe("Home Page", function() {
 it("Should load the home page and get title", function() {
  return new Promise((resolve, reject) => {
   browser
    .get(serverUri)
    .then(logTitle)
    .then(title => {
     assert.strictEqual(title, appTitle);
     resolve();
    })
    .catch(err => reject(err));
  });
 });

  it("Should check whether the given element is loaded", function() {
  return new Promise((resolve, reject) => {
   browser
    .findElement({ id: "sel-button" })
    .then(elem => resolve())
    .catch(err => reject(err));
  });
 });

  it("Should check counter value", function() {
  return new Promise((resolve, reject) => {
    browser
    .findElement({id: "sel-button"})
    .getAttribute("value")
    .then(value => resolve(console.log(value)))
    .catch(err => reject(err));
  });
});

   after(function() {
  browser.quit();
 });
});
