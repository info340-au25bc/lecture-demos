function whatGetsLogged() {
  console.log("Hello");
  setTimeout(() => console.log("World"), 0);
  console.log("All done!");
}

function delayedTimer() {
  const startTime = Date.now();

  setTimeout(() => fibonacci(45), 500);
  
  setTimeout(() => {
    const elapsedTime = Date.now() - startTime;
    console.log("Elapsed time: " + elapsedTime);
  }, 1000);

  console.log("Everything's scheduled now!")
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

whatGetsLogged()
// delayedTimer()