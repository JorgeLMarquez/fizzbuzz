const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test for ExplorerController",()=> {

    test("1.Get explorers by mission",()=>{
        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBe(10);        
    });

    test("2. Get explorers usernames by mission",()=>{
        const explorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorers[0]).toBe("ajolonauta1");        
    });    

    test("3. Get explorers amount by mission",()=>{
        const explorers = ExplorerController.getExplorersAmountByMission("node");
        expect(explorers).toBe(10);        
    });
    
 });
