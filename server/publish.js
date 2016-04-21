Leagues = new Mongo.Collection('leagues');

Meteor.publish("allLeagues", function(){
	return Leagues.find();
});

Meteor.publish("userLeagues", function(){
	return Leagues.find({user: this.userId});
});

Teams = new Mongo.Collection('teams');

Meteor.publish("allTeams", function(){
	return Teams.find();
});

Meteor.publish("userTeam", function(){
	return Teams.find({user: this.userId});
});
