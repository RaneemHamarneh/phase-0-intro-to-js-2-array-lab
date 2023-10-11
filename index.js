// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const catt = array(cats);

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
  
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function prependCat(name){
    return [name, ...cats];
}
function appendCat(name) {
    return [...cats, name];
  }

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1);
}

destructivelyAppendCat("Ralph");
destructivelyPrependCat("Bob");
destructivelyPrependCat();
destructivelyRemoveLastCat();
const cat = prependCat("Arnold");
appendCat("Broom");
removeFirstCat();

   
