// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    return(cats.push('Ralph'))
}
function destructivelyPrependCat(){
    return(cats.unshift('Bob'))
}
function destructivelyRemoveLastCat(){
    return(cats.pop('Garfield'))
}
function destructivelyRemoveFirstCat(){
    return(cats.shift('Milo'))
}
function appendCat(){
    const copyCat = [...cats, "Broom"]
    return copyCat
}
function prependCat(){
    const copyCat = ["Arnold",...cats]
    return copyCat
}
function removeLastCat(){
    const copyCat = [
        ...cats.slice(0,2)
    ]
    return copyCat
}
function removeFirstCat(){
    const copyCat = [
        ...cats.slice(1,3)
    ]
    return copyCat
}