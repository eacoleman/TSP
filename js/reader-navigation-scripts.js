/*
 *
*/
function hideAllPopovers(e) {
    $('.popup-window').each(function () {
        if (!$(this).is(e.target) && 
            $(this).has(e.target).length === 0 && 
            $('.popover').has(e.target).length === 0) {
          $(this).popover('hide');
        }
    });
};

/*
 *
*/
function resizeSearchContent() {
  availHei = window.innerHeight - 50 // nav size
                                - 18 // 
                                - 23 //
                                - 32 // popover title
                                - 11 // arrow height on popover
                                - parseInt($("#reader-nav-search").position().top);
                                
  $("#reader-search-content > .container-fluid").css("max-height", (availHei * 1.0) + "px");
};

/*
 *
*/
$("#reader-nav-search").popover({
  animation: true,
  container: "body",
  content: function () {
             return $('#reader-search-content').html();
           },
  placement: "auto",
  html: true,
  title: 'Search<div type="button" class="btn-sm popover-close" onclick="$(&quot;.popup-window&quot;).popover(&quot;hide&quot;);"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></div>',
  trigger: "manual"
}).click(function(e) {
    $(this).popover('toggle');
    $('.popup-window').not(this).popover('hide');

    e.stopPropagation();
}).on('input',function(e) {
  setTimeout(1000);
  onSearchBoxChange(e);
  $(this).popover('show');

  e.stopPropagation();  
  e.preventDefault();
});

/*
 *
*/
$(document).on('click', hideAllPopovers);

/*
 *
*/
$("button.navbar-toggle").on('click', function(e) {
  setTimeout(resizeSearchContent, 600);
})

/*
 *
*/
$(window).on('resize', function(e) {
  hideAllPopovers(e);
  resizeSearchContent();
  $(".loading-cover .progress").css('margin-top', (parseInt($(window).height())/2)+'px');
});

$(window).on('load', function(e) {
  resizeSearchContent();
  getTableOfContents();
});