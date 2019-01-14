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

function toWeirdCase(string) {
  return string.split(" ").map(word =>
    word
      .split("")
      .map(
        (letter, i) =>
          i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
      )
      .join("")
      .join(" ")
  );
}

function tea42(input) {
  let array = input.toString().split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "2") {
      array[i] = "t";
    }
  }
  return array.join("");
}
// the regex solution is way simpler:
function tea42(input) {
  return input.toString().replace(/2/g, "t");
}
