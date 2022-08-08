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

//Insertar nueva persona

const savePerson = (data)=>{
  if(data.age>120||data.age<=0){
    console.log("El promedio de edad debe estar de 0 a 120");
    return false
  }

  data.push(data)
};

savePerson({
  name:"Carlitos",
  age:22
});