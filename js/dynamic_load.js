/*
* GLOBAL VARS
*/
var readLocation = 0;    // global reader location

// Load elasticsearch server
//var elasticsearch = require('elasticsearch');
//var client = new elasticsearch.Client({
//  host: 'localhost:9200',
//  log: 'trace'
//});

function makeDivLoading() {
  //insert relevant div info into container
  $(".container-fluid").append(
              '<h3 class="loading-cover">'+
                '<div class="progress">'+
                  '<div class="progress-bar progress-bar-striped active" '+
                    'role="progressbar" aria-valuenow="100"'+
                    ' aria-valuemin="0" aria-valuemax="100" style="width: 100%">'+
                  '</div>'+
                '</div>'+
              '</h3>');
  $(".loading-cover .progress").css('margin-top', (parseInt($(window).height())/2)+'px');
}

function undoDivLoading() {
  $(".container-fluid .loading-cover").remove();
}

/* Make sure nobody is messing with the location variable
*
*   Output: true if we are good to use location, false o/w 
*/
function validateLocation() {
  return parseInt(readLocation) == readLocation;
}

/* Put in a GET request for 
*
*   Input: where in the book to start/finish
*
*   Output: the search results from our request
*/  
function elasticGET(beginLoc,endLoc) {

}

/* Formats each type of key entry
*
*   Input: key to convert to HTML
*
*   Output: HTML for single key entry
*/
function formatSingleKey(key) {
  outputString = "";

  switch(key.type) {
    case "SECTION"      :
      outputString+="<div class='SECTION'>";
      outputString+=key.text;
      outputString+="</div>";
      break;
    case "EXERCISE"     : // TODO: autonumbering?
      outputString+="<div class='EXERCISE'>";
      outputString+=key.text;
      outputString+="</div>";
      break;
    case "PARAGRAPH"    :
      outputString+="<div class='PARAGRAPH'>";
      outputString+=key.text;
      outputString+="</div>";
      break;
    case "EQUATION"     : // TODO: autonumbering? answers?
      outputString+="<div class='EQUATION'>";
      outputString+=key.text;
      outputString+="</div>";
      break;
    case "DEMONSTRATION": // TODO: implement simulations
      outputString+="<div class='DEMONSTRATION'>"; 
      outputString+=key.text;
      outputString+="</div>";
      break;
  }
}

/* The bread and butter of our reader. Puts together each key entry into one
*  string for injection into the main reader.
* 
*   Input:  The "keys" list returned from, for example, elasticSearchGet()
*
*   Output: HTML to be placed in the reader body
*/
function formatGETOutput(keysList,direction) {
  outputString = "";

  jQuery.each(keysList, function(i, val) {
    outputString += formatSingleKey(val);
  });

  return outputString;
}

/******************************************
*           BEGIN SCROLL-CHECKING
*******************************************/
$("#reader-book-body").scroll(function(){
  // Set location based off of top div id
  //location = ;

  // FOR LOADING BELOW
  if($("#reader-book-body").scrollTop() >= 0.10*$("reader-book-body").height()) {
    // TODO: include some animation for loading
      
    // put in a GET request with the server
    beginLoc  = parseInt($("reader-book-body :last-child").attr('id'))
    endLoc    = beginLoc + 10;
    keysToAdd = elasticGET(beginLoc,endLoc);

    // format the output of the GET request
    HTMLtoInject = formatGETOutput(keysToAdd, "BELOW");

    // inject HTML into reader body
    $("#reader-book-body").html($("#reader-book-body").html() + HTMLtoInject);

    return;
  }

  // FOR LOADING ABOVE
  if($("#reader-book-body").scrollTop() >= 0.10*$("reader-book-body").height()) {
    // TODO: include some animation for loading
      
    // put in a GET request with the server
    endLoc    = parseInt($("reader-book-body :first-child").attr('id'));
    beginLoc  = endLoc - 10;
    keysToAdd = elasticGET(beginLoc,endLoc);

    // format the output of the GET request
    HTMLtoInject = formatGETOutput(keysToAdd, "ABOVE");

    // inject HTML into reader body
    $("#reader-book-body").html(HTMLtoInject + $("#reader-book-body").html());

    return;
  }
});

function fullLoad(beginLoc) {
  // open a loading div in the reader
  makeDivLoading();

  // place GET request

  // format output

  // clear current reader
  $("#reader-book-body").empty();

  // insert HTML

  // close loading div
  undoDivLoading();
}

function getTableOfContents() {
  // open a loading div in the table of contents
  makeDivLoading();

  // place GET request

  // format JSON

  // insert HTML

  // apply .click() event handlers
  $(".sidebar-nav li a").click(function(e) {
    e.stopPropagation();
    e.preventDefault();
  })
  $(".sidebar ul li").click(onTOCElementClick);

  // close loading div
  undoDivLoading();
}

function onSearchBoxChange(e) {
  // wait a second
  setTimeout(600);

  // close popover
  $("#reader-nav-search").popover('hide');

  // open popover with 'loading' bar
  $("#reader-search-content .container-fluid").empty();
  $("#reader-search-content .container-fluid").append(
      '<h3 id="reader-search-loading" class="row sub-header">Loading...'+
        '<div class="progress" style="margin-top: 10px;height: 10px">'+
          '<div class="progress-bar progress-bar-striped active" role="progressbar"'+
          ' aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">'+
          '</div>'+
        '</div>'+
      '</h3>'
    );
  $("#reader-nav-search").popover('show');

  // place GET request

  // format JSON

  // close popover with 'loading' bar
  // /$("#reader-nav-search").popover('hide');

  // insert HTML into popover

  // reopen popover with search results in
  $("#reader-nav-search").popover('show');


}

function onSearchElementClick(e) {
  // close popover
  $("#reader-nav-search").popover('hide');

  // load at location corresponding to search element

}

function onTOCElementClick(e) {
  e.stopPropagation();
  e.preventDefault();

  // setup loading box
  makeDivLoading();

  // load at location corresponding to element

  // fix selected classes
  $(".nav-sidebar .active").removeClass('active');
  $(this).addClass("active");

  // close loading box
  undoDivLoading();

}