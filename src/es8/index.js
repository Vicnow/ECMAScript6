const data = {
    frontend: 'Victor',
    backend: 'Leonardo',
    design: 'Miry',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
    frontend: 'Victor',
    backend: 'Leonardo',
    design: 'Miry',
}

const values = Object.values(data);
console.log(values);

//padding

const string = 'hello';
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(14, ' -------'))
console.log('vicnow'.padEnd(14, ' -------'))


//Async Await

const helloWorld = () => {
    return new Promise((resolve,reject) =>{
        (true)
        ?setTimeout (()=> resolve('Hello World'),3000)
        :reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}
anotherFunction();