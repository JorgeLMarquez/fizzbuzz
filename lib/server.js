const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmountByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (request,response) =>{
    const mission = request.params.mission;
    const explorersUsernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, explorers: explorersUsernamesInMission});
});

app.get("/v1/fizzbuzz/:number", (request,response) =>{
    const number = request.params.number;
    const fizzbuzzTrick = ExplorerController.getFizzbuzzValidation(number);
    response.json({score: request.params.number, trick: fizzbuzzTrick});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
