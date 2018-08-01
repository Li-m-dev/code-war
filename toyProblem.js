function toWeirdCase(string) {
  return string
    .split(" ")
    .map(function(word) {
      return word
        .split("")
        .map(function(letter, index) {
          return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}

function tea42(input) {
  // your code
  let array = input.toString().split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "2") {
      array[i] = "t";
    }
  }
  return array.join("");
}
