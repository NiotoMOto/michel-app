angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Didacticiel 1',
    lastText: 'You on your way?'
  }, {
    id: 1,
    name: 'Didacticiel 2',
    lastText: 'Hey, it\'s me'
  }, {
    id: 2,
    name: 'Didacticiel 3',
    lastText: 'I should buy a boat'
  }, {
    id: 3,
    name: 'Didacticiel 4',
    lastText: 'Look at my mukluks!'
  }, {
    id: 4,
    name: 'Didacticiel 5',
    lastText: 'This is wicked good ice cream.'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
