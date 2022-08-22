function SelectionSort(arreglo) {
  for (let a = 0; a < arreglo.length; a++) {
      for (let j = a + 1; j < arreglo.length; j++) {
          if (arreglo[j] < arreglo[a]) {
              let aux = arreglo[a];
              arreglo[a] = arreglo[j];
              arreglo[j] = aux;
          }
          else if (arreglo[j] > arreglo[a]) {

          }

      }

  }
  return arreglo;
}


let ordenado = SelectionSort([1, 0, 5, 2, 3,7,4,6,9]);




function binario(ordenado,nro){
  let i= 0;
  let j= ordenado.length +1;
  let tope=false;

  while (tope == false) {
      let centro = Math.floor((i+j)/2);
      if ( centro == nro ){
        tope= true;

  }
  else if ( nro> centro ) {
    i = centro;
  } else if(nro< centro) {
      j = centro;
  }

}
if (tope==true){
return true;
}

}

console.log(binario(ordenado,9)); 
