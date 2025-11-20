/**
 * 
 * 
 * 
 */

"use strict";

(function() {
  window.addEventListener("load", init);

  let counter = 0;

  function init() {
    id("infinity").addEventListener("click", loop);
    id("other")   .addEventListener("click", other);
  }

  function loop() {
      
    // Version: 1 (asynchronous)
    console.log("Counter: " + counter++);
    setTimeout(loop);

    // Version: 2 (synchronous)
    // while(true) {console.log("Counter: " + counter++);}
  }

  function other() {
    console.log("Updating text...");
    id("text").textContent = "Counter is at: " + counter;
  }

  function id(name) {
    return document.getElementById(name);
  }
})();