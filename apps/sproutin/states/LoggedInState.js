Sproutin.LoggedInState = SC.State.extend({

  initialSubstate: 'loggedIn',

  loggedIn:SC.State.extend({

    enterState: function() {
      console.log('user is logged in...');


    },

    exitState:function() {
    }

  })
});