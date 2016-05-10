Meteor.methods({
  addLeagues(name, sportName, isAdmin) {
    Leagues.insert({
      league: name,
      sport: sportName,
      createdAt: new Date(),
      user: Meteor.userId(),
      admin: isAdmin,
    });
  },

  toggleLeagueAdmin(league) {
    check(league, Object);

    if (Meteor.userId() !== league.user) {
      throw new Meteor.Error('not-authorized');
		}

    Leagues.update(league._id, {
      $set: { admin: !league.admin },
    });
  },

  deleteLeague(league) {
    check(league, Object);
    if (Meteor.userId() !== league.user) {
      throw new Meteor.Error('not-authorized');
		}

    Leagues.remove(league._id);
  },
  addTeams(name, sportName, isAdmin) {
    check(name, String);
    check(name, String);
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Teams.insert({
      team: name,
      sport: sportName,
      createdAt: new Date(),
      user: Meteor.userId(),
      admin: isAdmin,
    });
  },

  toggleTeamsAdmin(team) {
    check(team, Object);

    if (Meteor.userId() !== team.user) {
      throw new Meteor.Error('not-authorized');
    }

    Teams.update(team._id, {
      $set: { admin: !team.admin },
    });
  },

  deleteTeam(team) {
    check(team, Object);
    if (Meteor.userId() !== team.user) {
      throw new Meteor.Error('not-authorized');
    }

    Teams.remove(team._id);
  },
});
