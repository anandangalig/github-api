var Repository = require('./../js/repo.js').repoModule;

var displayRepos = function(repo) {
  console.log(repo);
  $('.showRepos').text("aaaAAAAAaaaaa");

};

for(i = 0; i <= displayRepos.lenght; i++) {
  $('.showRepos').text("hi" + displayRepos[i].name);
}

$(document).ready(function() {
  var newUserRepository = new Repository();
  $('#newNameInput').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    $('#username').val("");
    var repositories = newUserRepository.getRepos(displayRepos);
  });
});
