Meteor.methods({
	addLeagues(name, sportName) {
		Leagues.insert({
			league: name,
      sport: sportName,
		  createdAt: new Date(),
      user: Meteor.userId(),
	  });
  },
  addTeams(name, sportName) {
		Teams.insert({
			team: name,
      sport: sportName,
		  createdAt: new Date(),
      user: Meteor.userId(),
	  });
  },
});
