function whatGetsLogged() {
  console.log("Hello");
  setTimeout(() => console.log("World"), 1000);
  setTimeout(() => console.log("Goodbye"), 500);
  console.log("All done!");
}

whatGetsLogged()