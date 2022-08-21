let a=[0,0,0,0];
function BusquedaLineal(a,nro){
    for(let i=0;i<a.length;i++){
        if(a[i]==nro){
            return true;   
        }
    }
    return false;
    

}

console.log(BusquedaLineal([2,3,4,1],4));