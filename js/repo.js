var apiKey = require('./../.env').apiKey;

Repository = function() {
};

Repository.prototype.getRepos = function(displayFunction){
  $.get('https://api.github.com/users/anandangalig/repos?access_token=' + apiKey).then(function(response){
    displayFunction(response);
  }).fail(function(error){
    $('showRepos').text(error.responseJSON.message);
  });
};

exports.repoModule = Repository;
