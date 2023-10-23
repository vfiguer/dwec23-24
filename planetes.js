function Planetes() {
    this.nom = "Nombre";
    this.distancia = 0;
    this.tamano= 0;
    this.descubrimiento = Date


Informacion = function () {
    return (
        this.nom + " " + this.distancia + " " + this.tamano + " " + this. descubrimiento
    )
}
}

let planetes = [
    ["Neptuno", 4500000000, 24622,  "23-09-1846"]
    ["Mercurio", 46001200, 6371,  "265 A.C"],
    ["Marte", 228000000, 6052,  "II milenio AC"],
    ["Saturno", 1418000000, 58232,  "1610 "],
    ["Jupiter", 750000000, 69911,  "1610"],
];
  
  let sistema = [];
  
  planetes.forEach((i) => {
    let planetes = new Planetes();
    planetes.nom = i[0];
    planetes.distancia = i[1];
    planetes.tamano = i[2];
    planetes.descubrimiento = i[3];
    sistema.push(planetes);
  });
  
  sistema.forEach((planetes) => {
    console.log(planetes.Informacion());
  });
  