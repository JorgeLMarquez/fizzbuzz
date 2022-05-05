const ExplorerService = require("../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");
const Reader = require("./../../lib/utils/Reader");


describe("Test para FizzbuzzService", () =>{
    const explorers = Reader.readJsonFile("./explorers.json");

    test("Requerimiento 3: Fizzbuzz trick", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const explorer3 = {name: "Explorer3", score: 3};
        const explorer5 = {name: "Explorer5", score: 5};
        const explorer15 = {name: "Explorer15", score: 15};

        expect(FizzbuzzService.applyValidationInExplorer(explorer1)).toMatchObject({name: "Explorer1", score: 1, trick: 1});
        expect(FizzbuzzService.applyValidationInExplorer(explorer3)).toMatchObject({name: "Explorer3", score: 3, trick: "FIZZ"});
        expect(FizzbuzzService.applyValidationInExplorer(explorer5)).toMatchObject({name: "Explorer5", score: 5, trick: "BUZZ"});
        expect(FizzbuzzService.applyValidationInExplorer(explorer15)).toMatchObject({name: "Explorer15", score: 15, trick: "FIZZBUZZ"});
    });

    test("Requerimiento 3.1: Fizzbuzz trick API", () => {
        const number1 = 1;
        const number3 = 3;
        const number5 = 5;
        const number15 = 15;

        expect(FizzbuzzService.applyValidationInNumber(number1)).toBe(1);
        expect(FizzbuzzService.applyValidationInNumber(number3)).toBe("FIZZ");
        expect(FizzbuzzService.applyValidationInNumber(number5)).toBe("BUZZ");
        expect(FizzbuzzService.applyValidationInNumber(number15)).toBe("FIZZBUZZ");
    });

});
