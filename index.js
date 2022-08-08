import { people } from './data.js';



//Calculando personas mayores de edad
const peopleLegalAge = people.filter(item=>{
  return item.age>=18
});

console.log(peopleLegalAge.length);

//Calculando personas menores de edad
const minors = people.filter(item=>{
  return item.age<18
});

console.log(minors.length);

//Calculando personas de la tercera edad 
const thirdAgePeople = people.filter(item=>{
  return item.age>=60
});

console.log(thirdAgePeople.length);


////////////////////////////////////////////////////////////

const ages = people.map(item=>item.age);

//Calculando persona con menor edad 

console.log(Math.min(...ages));

//Calculando persona con mayor edad 
console.log(Math.max(...ages));


//Calculando promedio de edad de personas
console.log((ages.reduce((a,b)=>a+b))/ages.length);
