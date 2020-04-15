function newFunction(name,age,contry){
    var name = name || 'victor';
    var age = age || 32;
    var contry = contry || 'MX';
    console.log(name, age, contry);
}

//es6
function newFunctionES(name = 'victor',age=32,contry='MX'){
    console.log(name,age,contry);
}

newFunctionES();
newFunctionES('leonardo',45,'CO');

let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "La gente encuentra su destino\n" + "en el camino que toma para evitarlo."

let lorem2 = `Otra frase super cool
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'victor',
    'age': 21,
    'contry': 'MX'
}

console.log(person.name,person.age);

let {name, age, contry} = person;
console.log(name,age,contry);

let team1 = ['Victor','Miry','Leo'];
let team2 = ['Valeria','Camila','Yesica'];

let education = ['David', ...team1,...team2];
console.log(education);

{
    var global = 'global';
}
{
    let globallet = 'globallet';
    console.log(globallet);
}

console.log(global);

const a = 'B';
// const a = 'B';

// a = 'A';

console.log(a);

let name = 'Victor';
let age = 21;

//ES5
obj = {
    name:name,
    age:age
};

//ES6
obj2 = {name,age};

console.log(obj);
console.log(obj2);

const names = [
    {
        name: 'Victor', age: 21
    },
    {
        name: 'Miry', age: 19
    }
]

let listOfNames = names.map(function(item){
    console.log(item.name);
});

let listOfNames2 = name.map(item => console.log(item.name));

const listOfNames3 = (name, ages, contry) => {
    // ...
}

const listOfNames4 = name =>{
    // 
}

const square = num => num * num;

// promesas

const helloPromise = () => {
    return new Promise((resolve,reject)=>{
        if (true){
            resolve('Hey!');
        }else{
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(()=>console.log('Hola'))
    .catch(err => console.log(err));

//Clases

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sumar(2,5));

import {hello} from './module';

hello();

function* helloWorld(){
    if (true){
        yield 'Hello, ';
    }
    if (true){
        yield 'World';
    }
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//es7


