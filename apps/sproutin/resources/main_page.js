// ==========================================================================
// Project:   Sproutin - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sproutin */

Sproutin.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'userName urlPath'.w(),

    userName:SC.LabelView.design({
      layout: { centerY: 0, height: 24, centerX: 0, width: 350 },
      needsEllipsis:YES,
      controlSize: SC.LARGE_CONTROL_SIZE,
      fontWeight: SC.BOLD_WEIGHT,
      escapeHTML: NO,
      isTextSelectable: YES,
      valueBinding:'Sproutin.userController.fullName'
    }),

    urlPath:SC.LabelView.design({
      layout: { centerY: 60, height: 24, centerX: 0, width: 350 },
      needsEllipsis:YES,
      controlSize: SC.LARGE_CONTROL_SIZE,
      fontWeight: SC.BOLD_WEIGHT,
      escapeHTML: NO,
      isTextSelectable: YES,
      valueBinding:'Sproutin.userController.profileUrl'
    })


  })

});


// This page describes the main user interface for your application.
//Sproutin.mainPage = SC.Page.design({
//
//  // The main pane is made visible on screen as soon as your app is loaded.
//  // Add childViews to this pane for views to display immediately on page
//  // load.
//  mainPane: SC.MainPane.design({
//    childViews: 'labelView'.w(),
//
//    labelView:  SC.View.extend({
//      mouseEntered:function(evt){
////        var accessToken = window.localStorage['YES'];
//        window.localStorage['cloudflix-oauth-token'] = "YES";
//        Sproutin.userController.set('isLoggedIn',YES);
//
//        return YES;
//      },
//      layout:{centerX:0,centerY:0,height:80,width:300},
//      escapeHTML:NO,
//
//      //this display the user to sign and register with the app
////      render: function(context, firstTime) {
////        context.push('<script type="IN/Login"> <form action="/register.html">' +
////            '<p>Your Name: <input type="text" name="name" value="<?js= firstName ?> <?js= lastName ?>" /></p>' +
////            '<p>Your Password: <input type="password" name="password" /></p>' +
////            '<input type="hidden" name="linkedin-id" value="<?js= id ?>" />' +
////            '<input type="submit" name="submit" value="Sign Up"/>' +
////            '</form><script type="IN/Login">');
////
////      }
//      //this allows the user to sign in and return with the users names
//      render: function(context, firstTime) {
//        context.push('<script type="in/Login">' +
//            'Hello, <?js= firstName ?> <?js= lastName ?>.' +
//            '</script>');
//
//      }
//    })
//  })
//
//});
////<form action="/register.html">
////<p>Your Name: <input type="text" name="name" value="<?js= firstName ?> <?js= lastName ?>" /></p>
////<p>Your Password: <input type="password" name="password" /></p>
////<input type="hidden" name="linkedin-id" value="<?js= id ?>" />
////<input type="submit" name="submit" value="Sign Up"/>
////</form>
