//Variables 
let x = 3
let y = 4
//backsting string
console.log(`x +y = ${x + y}`)
console.log(`x +y = ${x - y}`)
console.log(`x +y = ${x * y}`)
console.log(`x +y = ${x / y}`)
console.log(`x +y = ${x % y}`)

//CONDICIONALES
let w;
do{
   w = parseFloat(prompt("ingrese un numero"));//parseFloat convierte la cadena de caracteres en un numero decimal
}while(Number.isNaN(w))//Number.isNaN(value) revisa que Nan no sea un numero

//Nan Significa = not a number
console.log(w);
if (w > 0){
   console.log(`${w} es positivo`);
} else {
   if (w < 0)
      console.log(`${w} es negativo`);
   else
      console.log(`${w} es 0`);
}

