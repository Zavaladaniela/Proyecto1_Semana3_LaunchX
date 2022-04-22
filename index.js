// importando el archivo 
const missionComander = require ('./app/missionComander')

// instanciando objetos
const daniela = new missionComander ("Daniela")
const omar = new missionComander ("Omar")
const arturo = new missionComander ("Arturo")

// imprimiendo objetos 
console.log (daniela.name)
console.log (omar.name)
console.log (arturo.name)