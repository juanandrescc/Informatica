// variables DINAMICAS
//dynamic typing lenguage
let x = 4
let nombre = "luis"
let y = 2.5
let estudiar = true

//operadores
console.log(x + 3);
console.log(nombre + "briceño");
console.log(!estudiar || false && true); //operadores logicos igual que en c

//backtick strings
console.log(`la suma de x + 3 es: ${x+3}`);

if (x > y){
   console.log("x mayor que y");
}else{
   if (x == y){
      console.log("x igual a y");
   }else {
      console.log("x menor que y");
   }
}  