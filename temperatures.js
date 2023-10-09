  
function temperaturas () {
    let diez = {
        any2010Juny: 25.8,
        any2010Juliol: 28.6,
        any2010Agost: 30.1 
    }
    let quince = {
        any2015Juny: 26.5,
        any2015Juliol: 29.3,
        any2015Agost: 30.8
    }
    let veinte = {
        any2020Juny: 27.2,
        any2020Juliol: 29.9,
        any2020Agost: 31.5
    }
    //Declaramos las temperaturas de los tres años
    let mitjanaAny2010 = ((diez.any2010Agost+diez.any2010Juliol+diez.any2010Juny)/3)
    let mitjanaAny2015 = ((quince.any2015Agost+quince.any2015Juliol+quince.any2015Juny)/3)
    let mitjanaAny2020 = ((veinte.any2020Agost+veinte.any2020Juliol+veinte.any2020Juny)/3)
    //Utilizando las temperaturas calculadas hacemos las medias de cada año

    let mitjanaAny2010Fahrenheit = (mitjanaAny2010*9/5)+32
    //calculamos la media en fahrenheit
    let mitjanaAny2010Kelvin = mitjanaAny2010 + 273.15 
    //calculamos la media en kelvin

    let mitjanaAny2015Fahrenheit = (mitjanaAny2015*9/5)+32
    //calculamos la media en fahrenheit

    let mitjanaAny2015Kelvin = mitjanaAny2015 + 273.15 
    //calculamos la media en kelvin

    let mitjanaAny2020Fahrenheit = (mitjanaAny2020*9/5)+32
        //calculamos la media en fahrenheit
    let mitjanaAny2020Kelvin = mitjanaAny2020 + 273.15 
    //calculamos la media en kelvin

    if (mitjanaAny2010>30.0) {
        let superatAny2010 = true;
    }
    //usamos un condicional para saber si es mas de 30 grados la media
    if (mitjanaAny2015>30.0) {
        let superatAny2015 = true;
    }    
    //usamos un condicional para saber si es mas de 30 grados la media


    if (mitjanaAny2020>30.0) {
        let superatAny2020 = true;
    }
    //usamos un condicional para saber si es mas de 30 grados la media


    console.log (mitjanaAny2010 + mitjanaAny2010Fahrenheit + mitjanaAny2010Kelvin)
    //imprimimos las medias
    if (superatAny2010 = true) {
        console.log ("Superat els 30 graus Celsius")
    }
    //si pasa de 30 grados imprimimos el aviso

    console.log (mitjanaAny2015 + mitjanaAny2015Fahrenheit + mitjanaAny2015Kelvin)
    //imprimimos las medias

    if (superatAny2015 = true) {
        console.log ("Superat els 30 graus Celsius")
    }
    //si pasa de 30 grados imprimimos el aviso

    console.log (mitjanaAny2020 + mitjanaAny2020Fahrenheit + mitjanaAny2020Kelvin)
    //imprimimos las medias

    if (superatAny2020 = true) {
        console.log ("Superat els 30 graus Celsius")
    }
    //si pasa de 30 grados imprimimos el aviso

    }