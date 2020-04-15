//operador de reposo
const obj = {
    name: 'victor',
    age: 21,
    contry: 'Mx',
};

let {name, ...all} = obj;
console.log(name,all);

//composicion de objetos

const obj = {
    name: 'Victor',
    age : 21,
};

const obj1 = {
    ...obj,
    contry: 'Mx',
};

console.log(obj1);

//Primise Finaly

const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(()=>resolve('Hello World'),3000)
        : reject(new Error('Test error'))
    })
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(()=> console.log('Finalizada')) //Es9


//Regex a grupos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3] 

console.log(year,month,day);