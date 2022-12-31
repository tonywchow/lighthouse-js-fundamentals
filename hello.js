const sayHelloToConsole = function (name){
  console.log('Hello, '+ name);
}

sayHelloToConsole('Tony');

const returnSayHello = function (name){
  return 'Hello, '+ name;
}

const greeting = returnSayHello('John');