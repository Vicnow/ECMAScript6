//Profundidad de matrices
let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat(2));

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value,value * 2]));


let hello = '            hello world           ';

console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());


try {
    
} catch {
    error
}

//FromEntries

let entries = [["name", "victor"],["age",21]];
console.log(Object.fromEntries(entries));

//Objeto tipo simbolo

let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);