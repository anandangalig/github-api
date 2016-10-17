var Repository = require('./../js/repo.js').repoModule;



$(document).ready(function() {
  var newUserRepository = new Repository();
  $('#newNameInput').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    $('#username').val("");

    var displayRepos = function(repo) {
      console.log(repo[0].name);
      $('.showRepos').text(repo[11].name);
      for each (var repository in repo ) {
        $('.showRepos').prepend("<li>" + repository.name + "</li>");
      };
    };

    var repositories = newUserRepository.getRepos(displayRepos);
    // for (i = 0; i <= repositories.lenght; i++) {
    //   $('.showRepos').prepend("<li>" + repositories[i].name + "</li>");
    // }
  });
});
