


function calculadora () {
let nomEstudiant = "Valentin";
let notaExamen1 = 10;
let notaExamen2 = 3;
let notaProjecte = 6;
let notaFinal = (notaExamen1*0,2 + notaExamen2*0,2 + notaProjecte*0,6);

console.log ( "Estudiant:" + nomEstudiant + "\n" + "" + 
               "Nota de l'Examen 1:" + notaExamen1+ "" + "\n" +
               "Nota de l'Examen 2:" + notaExamen2+ "" +"\n" +
               "Nota del Projecte:" + notaProjecte+ "" +"\n" +
               "Nota Final" +""+ notaFinal);

if (notaFinal>=5){
    console.log("Ha aprobado!")
}
else {
    console.log ("Ha suspendido")
}

if(notaFinal>7){
    console.log("Felicidades, muy buena nota")
}
else{
    console.log("Necesitas mejorar la nota")
}



}



