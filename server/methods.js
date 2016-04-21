Meteor.methods({
	addLeagues(name, sport) {
		Leagues.insert({
			league: name,
      sport: sport,
		  createdAt: new Date(),
      user: Meteor.userId(),
	  });
  },
  addTeams(name, sport) {
		Teams.insert({
			team: name,
      sport: sport,
		  createdAt: new Date(),
      user: Meteor.userId(),
	  });
  },
});
