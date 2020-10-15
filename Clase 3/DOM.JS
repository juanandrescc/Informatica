encabezado = document.querySelector ("h1"); //La variable encabezado toma el valor de lo que dice el h1 en el documento enlazado
console.log(encabezado);//imprime la variable
texto = prompt("ingrese el texto que quiere en el encabezado");//pide lo que quiera poner en el titulo (toma el valor de la variable)
encabezado.innerHTML = texto; //cambia el valor de la variable encabezado por lo que se pone en el texto
color = prompt("ingrese el color deseado"); 
encabezado.style.backgroundColor = color; //aqui se pone una propiedad del elemento h1 y se cambia (ojo a la sintaxis)

