let edad;
do{
   edad = parseFloat(prompt("ingrese su edad:"));
}while(Number.isNaN(edad)||edad<= 0)

do{
   var nombre = prompt("ìngrese su nombre:");
}while(nombre.length < 3)



if(edad < 12){
   console.log(`Hola ${nombre}`);
}else{
   if(edad < 50){
      console.log(`Buenos días ${nombre}`);
   }else console.log(`Buenos días respetado ${nombre}`);
}

