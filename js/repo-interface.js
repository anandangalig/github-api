var Repository = require('./../js/repo.js').repoModule;

var displayRepos = function(repo) {
  for (i = 0; i < repo.length; i++) {
    $('#showRepos').append("<li>" + "<a href='" + repo[i].clone_url + "'" + "target='_blank'>" + repo[i].name + "</a>" + "</li>");
  }
};


$(document).ready(function() {
  var newUserRepository = new Repository();
  $('#newNameInput').submit(function(event) {
    event.preventDefault();
    var repositories = newUserRepository.getRepos(displayRepos);
    $('#username').val("");
    $("#showRepos").html("");
  });
});
