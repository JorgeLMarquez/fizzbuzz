const fs = require("fs");

class Reader{
    static readJsonFile(path){
	 		const rawdata = fs.readFileSync("explorers.json");
	 		return JSON.parse(rawdata);
    }
}//fin de la clase Reader

module.exports = Reader;

