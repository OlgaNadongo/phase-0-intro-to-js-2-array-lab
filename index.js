
const cats=["Milo", "Otis", "Garfield"]
console.log(cats);

 function destructivelyAppendCat(name){
     console.log(cats.push("Ralph"))
 }
 function destructivelyPrependCat(name){
    console.log(cats.unshift("Bob"))
}
function destructivelyRemoveLastCat(name){
    console.log(cats.pop("Bob"))
}
function destructivelyRemoveFirstCat(name){
    console.log(cats.shift())
}

function appendCat(name){
  const newCats = [...cats]
  newCats.push(name)
    return newCats;
}


function prependCat(name){
    const manyCats= [...cats];
    manyCats.unshift(name)
    return manyCats
}

function removeLastCat(name){
    const fewCats=[...cats]
    fewCats.pop(name)
    return fewCats
}

function removeFirstCat(name){
    const lessCats=[...cats]
    lessCats.shift(name)
    return lessCats
}
  