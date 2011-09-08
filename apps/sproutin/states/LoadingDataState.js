Sproutin.LoadingDataState = SC.State.extend({

  initialSubstate: 'fetchingData',

  fetchingData:SC.State.extend({

        enterState: function() {
          console.log('fetching data....');
          Sproutin.getPath('mainPage.mainPane').append();
        },



        exitState:function() {
        }

      })
});