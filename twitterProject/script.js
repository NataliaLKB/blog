$(document).ready(function () {

  var jsonstring = "";
  var toWrite = "";

    var rtime = function (dateString) {
    var rightNow = new Date();
    var then = new Date(dateString);

    var diff = rightNow - then;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    if (isNaN(diff) || diff < 0) {
      return "";
    }
    if (diff < second * 2) {
      return "right now";
    }
    if (diff < minute) {
      return Math.floor(diff / second) + " seconds ago";
    }
    if (diff < minute * 2) {
      return "about 1 minute ago";
    }
    if (diff < hour) {
      return Math.floor(diff / minute) + " minutes ago";
    }
    if (diff < hour * 2) {
      return "about 1 hour ago";
    }
    if (diff < day) {
      return  Math.floor(diff / hour) + " hours ago";
    }
    if (diff > day && diff < day * 2) {
      return "yesterday";
    }
    if (diff < day * 365) {
      return Math.floor(diff / day) + " days ago";
    }
    else {
      return "over a year ago";
    }
  };

  var pulldata = function () {

    $.ajax({
      type: "GET",
      cache: false,
      dataType: "JSON",
      url: "http://neapolitan.herokuapp.com/",
      success: function (data) {
        jsonstring = data;
        massageData(jsonstring);
      },
      error: function (errorT) {
        console.log(errorT);
      }
    });
  };

  function massageData(twstring) {
    twstring.statuses.forEach(function (statuses) {
      if (typeof statuses.entities.media !== 'undefined') {
        toWrite += "<div class='col-md-6 col-sm-6 col-xs-12'>" +
          "<div class='thumbnail'>" + "<div id='outer'>" +
          "<img src='" + statuses.entities.media[0].media_url + "'></div>" +
          "<div class='caption'>" +
          "<p>" + rtime(statuses.created_at) + "</p>" +
          "<h4>" + statuses.user.name + "</h4>" +
          "</div></div></div>";
      }
    });

    $("#content").append(
      toWrite
    );
  }



  pulldata();

});