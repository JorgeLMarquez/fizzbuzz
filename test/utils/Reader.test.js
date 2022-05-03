const Reader = require("../../lib/utils/Reader");
require('jest-json-matchers/register')
describe("Test for Reader.js",()=> {
    test("1.¿Can you read me?.",()=>{
    		const explorers = Reader.readJsonFile("./explorers.json");
    		const reverse = JSON.stringify(explorers);
        expect(reverse).toBeJSON();  
    });
});


