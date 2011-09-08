// ==========================================================================
// Project:   Sproutin.User
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sproutin */

/** @class

    (Document your Model here)

 @extends SC.Record
 @version 0.1
 */
Sproutin.User = SC.Record.extend({

  _key:SC.Record.attr(String),
  firstName:SC.Record.attr(String),
  lastName:SC.Record.attr(String),
  id:SC.Record.attr(String),
  publicProfileUrl:SC.Record.attr(String),

  fullName:function(){
    var first = this.get('firstName');
    var last  = this.get('lastName');
     fullName = 'Profile Name: ' + first + " " +last;

    return fullName;

  }.property('fullName').cacheable(),

  profileUrl:function(){
    var url = this.get('publicProfileUrl');
     urlPath = "Public Profile Site :" + "<a href="+url+">My Site</a>";

    return urlPath;

  }.property('urlPath').cacheable()


});
