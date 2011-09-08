Sproutin.LoadingDataState = SC.State.extend({

  initialSubstate: 'fetchingData',

  fetchingData:SC.State.extend({

    enterState: function() {
      console.log('fetching data....');
      this.onLinkedInLoad();
      //Sproutin.getPath('mainPage.mainPane').append();
      //var signin =  Sproutin.userController.get('isLoggedIn');


    },

    onLinkedInLoad:function() {
      IN.Event.on(IN, "auth", function() {
        IN.API.Profile("me")
            .fields(["id", "firstName", "lastName", "pictureUrl", "publicProfileUrl"])
            .result(function(result) {
              console.log('this is the user [%@]', result.values[0]);
              Sproutin.getPath('mainPage.mainPane').append();
              var data = result.values[0];
              var hash = {
                guid:1,
                _key:data._key,
                firstName:data.firstName,
                id:data.id,
                lastName:data.lastName,
                publicProfileUrl:data.publicProfileUrl
              };
              debugger;

              Sproutin.store.loadRecord(Sproutin.User, hash);
              var user = Sproutin.store.find(Sproutin.User);

              Sproutin.userController.set('content', user);

              //this.gotoState('LoggedInState');

            })
            .error(function(err) {
              alert(err);
            });
      });
      IN.Event.on(IN, "logout", function() {
        debugger;
        this.onLinkedInLogout();
      });

    },


    exitState:function() {
    }

  })
})
    ;