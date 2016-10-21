var apiKey = require('./../.env').apiKey;
Repository = function() {
};

Repository.prototype.getRepos = function(displayFunction){
  var username = $('#username').val();
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    displayFunction(response);
  }).fail(function(error){
    $('showRepos').text(error.responseJSON.message);
  });
};

exports.repoModule = Repository;
