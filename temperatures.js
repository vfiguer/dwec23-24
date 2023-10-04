  
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
    
    let mitjanaAny2010 = ((diez.any2010Agost+diez.any2010Juliol+diez.any2010Juny)/3)
    let mitjanaAny2015 = ((quince.any2015Agost+quince.any2015Juliol+quince.any2015Juny)/3)
    let mitjanaAny2020 = ((veinte.any2020Agost+veinte.any2020Juliol+veinte.any2020Juny)/3)

    }