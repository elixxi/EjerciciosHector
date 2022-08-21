function binario(arreglo,nro){
    let inicio = 0;
    let centro;
    let final= arreglo.length-1; //nos sirve para asignar la posicion final de nuestro arreglo

    while (inicio <= final) {
        centro = (inicio+final) / 2;
        if ( arreglo[centro] == nro ){
          return true;
          break;
    }
        else if ( nro< arreglo[centro] ) {
          inicio = centro-1;
        } else {
            final = centro+1;
        }
    }
    
       }
   

console.log(binario([1,2,3,4,5,6,7,8,9],4));