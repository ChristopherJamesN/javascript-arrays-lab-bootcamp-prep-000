const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten (elm) {
  kittens.push(elm);
  return kittens;
  kittens = ["Milo", "Otis", "Garfield"];
}


function destructivelyPrependKitten (elm) {
  kittens.unshift(elm);
  return kittens;
  kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyRemoveLastKitten {
  kittens.slice(0, kittens.length-1);
  return kittens;
  kittens = ["Milo", "Otis", "Garfield"];
}
