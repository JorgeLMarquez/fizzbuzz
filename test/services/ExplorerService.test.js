const ExplorerService = require("../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");
const Reader = require("./../../lib/utils/Reader");


describe("Test para ExplorerService", () =>{ 
    const explorers = Reader.readJsonFile("./explorers.json");
    
    test("Requerimiento 1: Lista de explorers que solo están en node", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(10);
        expect(explorersInNode[0]).toMatchObject({ mission: "node"});
    });

    test("Requerimiento 2: Cantidad de explorers que solo están en node", () => {
        const explorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInMission).toBe(10);
    });
    
});
