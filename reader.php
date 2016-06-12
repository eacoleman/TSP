
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Dashboard Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/dashboard.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

  </head>

  <body style="overflow-y: hidden;">

    <!-- NAVIGATION CONTAINER -->
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">The Students' Perspective</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><span class="glyphicon glyphicon-home" style="margin-right: 4px;" aria-hidden="true"></span>Home</a></li>
            <li id="reader-nav-settings" type="button" data-toggle="modal" data-target="#reader-modal-settings"><a href="#"><span class="glyphicon glyphicon-cog" style="margin-right: 4px;" aria-hidden="true"></span>Settings</a></li>
          </ul>

          <!-- SEARCH -->
          <form id="reader-nav-search" class="popup-window navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search equations, text...">
          </form>

          <div id="reader-search-content" class="popup-content hide">
            <div class="container-fluid" style=""> 
              <h3 id="reader-search-loading" class="row sub-header">Loading...
                <div class="progress" style="margin-top: 10px;height: 10px">
                  <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                </div>
              </h3>
              <ul class="row nav search-container">
                <li>Title
                  <div style="text-align: right; color: grey; width: 100%;">...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</div>
                </li>
                <li>Title <br \>
                  <div style="text-align: right; color: grey; width: 100%;">...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</div>
                </li>
                <li>Title <br \>
                  <div style="text-align: right; color: grey; width: 100%;">...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</div>
                </li>
                <li>Title <br \>
                  <div style="text-align: right; color: grey; width: 100%;">...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</div>
                </li>
              </ul>
            </div>
        </div>
        </div>
      </div>
    </nav>

     <!-- MathJax script (local copy) -->
     <!-- See /MathJax/config/default.js if you want to set up your own config -->
     <script type="text/javascript" async src="./MathJax/MathJax.js?config=TeX-MML-AM_CHTML"></script>

    <!-- MAIN CONTAINER -->
    <div class="container-fluid">
      <div class="row">
        <!-- SIDENAV -->
        <div class="col-sm-3 col-md-2 sidebar">
          <h1 class="sub-header">Quantum Mechanics</h1>
          <ul class="nav nav-sidebar">
            <li class="active"><a href="#">Title <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Authors' Note</a></li>
            <li><a href="#">Chapter 1: Spintroduction</a></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li><a href="">Chapter 2: A Mechanical Review</a></li>
          </ul>
        </div>

        <!-- READER BODY -->
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          \( \hat{H}\psi(t) = i\hbar \frac{\partial}{\partial t}\psi(t) \)
        </div>
      </div>
    </div>

    <!-- SETTINGS MODAL -->
    <div class="modal fade" id="reader-modal-settings" tabindex="-1" role="dialog" aria-labelledby="Settings">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Settings</h4>
          </div>
          <div class="modal-body">
            Font size:<br \><br \>

            Saved settings:<br \>
            Remember last-viewed page<br \>
            <br \>


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="js/bootstrap.min.js"></script>
    <!-- Just to make our placeholder images work. Don't actually copy the next line! -->
    <script src="js/holder.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/ie10-viewport-bug-workaround.js"></script>

    <!-- Scripts for style, modal, popovers, other utils -->
    <script src="js/reader-navigation-scripts.js"></script>
  </body>
</html>
