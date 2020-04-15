//ESMAScript7 includes()
let number = [1,2,3,8,6,4];
for (let index = 0; index <= 10; index++) {
    if(number.includes(index)){
        console.log(`Si se encuentra el valor ${index} en el arreglo`);
    }else{
        console.log(`NO se encuentra el valor ${index} en el arreglo`);
    }
}

//elevar a la Potencia **

let base = 4;
let exponente = 0;

let result = base ** exponente;

console.log(result);

