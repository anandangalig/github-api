var Repository = require('./../js/repo.js').repoModule;

var displayRepos = function(repo) {
  console.log(repo);
  $('.showRepos').text("here it is: " + repo);
};

$(document).ready(function() {
  var newUserRepository = new Repository();
  $('#newNameInput').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    $('#username').val("");
    var repositories = newUserRepository.getRepos(username, displayRepos);
  });
});
