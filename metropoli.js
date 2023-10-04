function metropolis() {
    let ciudad = {
        es_capital: false,
        numciudadanos: 300000,
        impuesto: 2000000
    }
    
    if (ciudad.es_capital == true && ciudad.numciudadanos >= 100000) {
            let metropoli =true;
            console.log(metropoli);
    }
    else {
        if(ciudad.numciudadanos>=200000 && (ciudad.numciudadanos*ciudad.impuesto*12)>=720000000){
                 let metropoli = true;
                console.log (metropoli)
        }
        else {
            let metropoli = false;
            console.log (metropoli)
        }
    }
    }