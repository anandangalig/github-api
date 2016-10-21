var Repository = require('./../js/repo.js').repoModule;

var displayRepos = function(repo) {
  console.log(repo[0].name);
  for (i = 0; i < repo.length; i++) {
    $('#showRepos').append("<li>" + repo[i].name + "</li>");
    console.log(repo[i].name);
  }
};


$(document).ready(function() {
  var newUserRepository = new Repository();
  $('#newNameInput').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    $('#username').val("");
    var repositories = newUserRepository.getRepos(displayRepos);
  });
});
