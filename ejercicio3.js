function binario(arreglo,nro){
    let i= 0;
    let j= arreglo.length;
    let tope=false;

    while (tope == false) {
        let centro = Math.floor((i+j)/2);
        if ( centro == nro ){
          tope= true;
          
    }
        else if ( nro> centro ) {
          i = centro;
        } else if(nro< centro) {
            j = centro+1;
        }
    }
    if (tope==true){
      return true;
    }
       }
   

console.log(binario([1,2,3,4,5,6,7,8,9],9));