Template.comment.helpers({
  submittedText: function() {
    return new Date(this.submitted).toString();
  }
});

//Format date for displaying when comment submitted
var DateFormat = {
       long: "DD.MM.YYYY HH:mm"
};

Handlebars.registerHelper("formatDate", function(datetime, format) {
  if (moment) {
    f = DateFormat[format];
    return moment(datetime).format(f);
  }
  else {
    return datetime;
  }
});
