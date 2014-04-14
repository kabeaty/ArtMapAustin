Template.artspotEdit.events({
  'click #submit-artspot-edit': function(e, template) {
    e.preventDefault();

    var currentArtspotId = this._id;

    //Grab edited properties user has entered
    var artspotProperties = {
      title: $('.short-title-edit-input').val(),
      description: $('.description-edit-input').val()
    }

    //Update artspot with new properties
    Artspots.update(currentArtspotId, {$set: artspotProperties}, function(error) {
    if (error) {
      alert(error.reason);
    } else {
      Router.go('artspotPage', {_id: currentArtspotId});
    }
 });
  }
});
