let arreglo = [0, 0, 0, 0];
function SelectionSort(arreglo) {
    for (let a = 0; a < arreglo.length; a++) {
        for (let j = a + 1; j < arreglo.length; j++) {
            if (arreglo[j] < arreglo[a]) {
                let aux = arreglo[a];
                arreglo[a] = arreglo[j];
                arreglo[j] = aux;
            }
            else {

            }

        }

    }
    return arreglo;
}


console.log(SelectionSort([-1, 2, 5, 1, 0]));