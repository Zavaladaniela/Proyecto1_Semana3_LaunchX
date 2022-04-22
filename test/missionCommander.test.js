//importando clase
const missionComander = require ('./../app/missionComander');

describe ("Unit tests for mission Commander class", () =>{
    test ('1) create a mission commander objet', () =>{
        const myMissionCommander = new missionComander ("Woopa")
        expect (myMissionCommander.name).toBe("Woopa");
    })
})