Artspots = new Meteor.Collection('artspots');

if(Meteor.isClient) {
  Meteor.subscribe('artspots');
}
