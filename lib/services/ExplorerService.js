class ExplorerService{
	
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = this.filterByMission(explorers, mission);
        return explorersByMission.length;
    }
	
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersGetUsernames =  this.filterByMission(explorers, mission);
        const usernames = explorersGetUsernames.map((explorer) => explorer.githubUsername);
        return usernames;
    }
	
}

module.exports = ExplorerService;
