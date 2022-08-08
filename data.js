
export const people = [
    {
      "id": 1,
      "name": "Pepito",
      "age": 15
    },
    {
      "id": 2,
      "name": "Jaimito",
      "age": 10
    },
    {
      "id": 3,
      "name": "Joselito",
      "age": 40
    },
    {
      "id": 4,
      "name": "Anita",
      "age": 35
    },
    {
      "id": 5,
      "name": "Pompilio",
      "age": 70
    },
    {
      "id": 6,
      "name": "Mercedez",
      "age": 72
    },
    {
      "id": 7,
      "name": "Lala",
      "age": 18
    },
    {
      "id": 8,
      "name": "Johnsito",
      "age": 20
    },
    {
      "id": 9,
      "name": "Fabio",
      "age": 20
    },
    {
      "id": 10,
      "name": "Kata",
      "age": 30
    },
    {
      "name": "Paola",
      "age": 16,
      "id": 11
    }
  ].sort((a,b)=>{
  if(a.age<b.age) 
    return -1;
  if(a.age>b.age) 
    return 1;
  
  return 0;
});





