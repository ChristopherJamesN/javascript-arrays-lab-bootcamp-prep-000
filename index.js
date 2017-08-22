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

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
  kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
  kittens = ["Milo", "Otis", "Garfield"];
}

function appendKitten(name) {
  newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name) {
  newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten() {
  newKittens = kittens.slice(0, kittens.length-1);
  return newKittens;
}

function removeFirstKitten() {
  newKittens = kittens.slice(1);
  return newKittens;
}
