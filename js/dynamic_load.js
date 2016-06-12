/*
* GLOBAL VARS
*/
var location = 0;    // global reader location

/* Make sure nobody is messing with the location variable
*
*   Output: true if we are good to use location, false o/w 
*/
function validateLocation() {
  return parseInt(location) == location;
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
      outputString=
      outputString+=key.text  
      break;
    case "EXERCISE"     :
      break;
    case "PARAGRAPH"    :
      break;
    case "EQUATION"     :
      break;
    case "DEMONSTRATION":
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
  location = ;

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