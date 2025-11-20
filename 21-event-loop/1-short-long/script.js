/**
 * This example demonstrates what happens when there's a really 
 * long task in the queue. By extension, it answers the question
 *  "why aren't setTimeouts _guaranteed_ to run at the specified 
 * time".
 * 
 * The first button, "Short" has two timers: one that starts a 
 * task immediately that finished immediately (trivial callback),
 * and a second that aims to run 0.5 seconds in the future.
 * 
 * The second button, "Long" also has two timers: one that starts
 * a task immediately, but is a non-trivial function that takes a
 * long time to complete (i.e., it keeps the stack full). The
 * second task is also scheduled immediately and aims to run 0.5
 * seconds in the future.
 */
"use strict";

(function() {
  let startTimes = {};
  const HALF_SECOND = 500;

  window.addEventListener("load", init);

  function init() {
    id("short").addEventListener("click", startShort);
    id("long") .addEventListener("click", startLong);
  }

  function startShort() {
    startTimes["short"] = new Date().getTime();

    setTimeout(() => 1             , 0);
    setTimeout(() => timer("short"), HALF_SECOND);
  }

  function startLong() {
    startTimes["long"] = new Date().getTime();

    setTimeout(() => fibinnaci(42), 0);
    setTimeout(() => timer("long"), HALF_SECOND);
  }

  function timer(name) {
    let finishTime = new Date().getTime();
    let actual = finishTime - startTimes[name];
    
    console.log(name + " timer fired. Duration: " + 
      actual + "ms");

    console.log("Diff from expected: " +
     (actual - HALF_SECOND) + "ms");
  }

  function fibinnaci(n) {
    if (n <= 1) return n;
    return fibinnaci(n - 1) + fibinnaci(n - 2);
  }

  function id(name) {
    return document.getElementById(name);
  }
})();