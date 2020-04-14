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