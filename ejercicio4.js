function burbuja(arreglo){
    for(let i=0;i<arreglo.length -1;i++){
        for(let j=0;j<arreglo.length -1;j++){
            if (arreglo[j]> arreglo[j+1]){
                let aux = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = aux;

            }
        }
    }
    return arreglo;
}

console.log(burbuja([0,20,7,10,-1]));