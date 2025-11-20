"use strict";

(function() {
  let counter = 0;

  window.addEventListener("load", init);

  function init() {
    id("infinity").addEventListener("click", loop);
    id("other")   .addEventListener("click", other);
  }

  function loop() {
    console.log("Counter: " + counter++);
    Promise.resolve().then(loop);
  }
  
  function other() {
    console.log("Updating text...");
    id("text").textContent = "Counter is at: " + counter;
  }

  function id(name) {
    return document.getElementById(name);
  }
})();