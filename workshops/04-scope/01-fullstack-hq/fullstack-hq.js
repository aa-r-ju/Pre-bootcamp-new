// Edit the code below
let place = "Planet Earth";

function fullstackHQ() {
  return middleFunction("United States");

  function middleFunction(state) {
    return innerFunction("New York State");

    function innerFunction(state1) {
      let city = "New York City";
      return innermostFunction();

      function innermostFunction() {
        return (
          "Fullstack HQ is at " +
          place +
          ", " +
          state +
          ", " +
          state1 +
          ", " +
          city
        );
      }
    }
  }
}
console.log(fullstackHQ());
