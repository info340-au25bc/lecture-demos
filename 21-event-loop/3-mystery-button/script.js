"use strict";

(function() {

  window.addEventListener("load", init);

  function init() {
    mysteryWithTimeouts();
    mysteryWithPromises();
  }

  function mysteryWithTimeouts() {
    id("timeouts").addEventListener("click", () => {
      setTimeout(() => console.log("1"), 0);
      console.log("2");
    });

    id("timeouts").addEventListener("click", () => {
      setTimeout(() => console.log("3"), 0);
      console.log("4");
    });
  }

  function mysteryWithPromises() {
    id("promises").addEventListener("click", () => {
      new Promise(executor).then(() => console.log("1"));
      console.log("2");
    });

    id("promises").addEventListener("click", () => {
      new Promise(executor).then(() => console.log("3"));
      console.log("4");
    });
  }

  /*
    Simple executor that just resolves and never rejects.

    These two lines are equivelant:

    new Promise(executor)
    Promise.resolve() 
  */
  function executor(resolve, reject) {
    resolve();
  }

  function id(name) {
    return document.getElementById(name);
  }
})();