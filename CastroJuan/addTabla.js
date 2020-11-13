let tabla = document.querySelector("#tablaEstudiantes");
let encabezados = [
   {
      columna1: "Materia",
      columna2: "Descripcion",
      columna3: "Fecha",
   }
];

function crearTabla(){
   tabla.innerHTML="";
   for (columna of encabezados){
      let fila = document.createElement("tr");
      for(valor of Object.values(columna)){
         let celdaNueva = document.createElement("th");
         celdaNueva.innerHTML = valor;
        fila.appendChild(celdaNueva);
      }
      tabla.appendChild(fila);
   }
}
crearTabla();

let tareas = [];
function addTabla(){
   let inputMat = document.querySelector("#materia").value;
   let inputDesc = document.querySelector("#descripcion").value;
   let inputFec = document.querySelector("#fecha").value;
   let filaNueva = 
      {
         Materia: inputMat,
         Descripcion: inputDesc,
         Fecha: inputFec,
      }
   tareas.push(filaNueva); //registro de todas las tareas

   crearTabla();
   
   for (tarea of tareas){
      let fila = document.createElement("tr");
      for(valor of Object.values(tarea)){
         let celdaNueva = document.createElement("td");
         celdaNueva.innerHTML = valor;
         fila.appendChild(celdaNueva);
      }
      tabla.appendChild(fila);
      console.log(tareas)
   }
}



