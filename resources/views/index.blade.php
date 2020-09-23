<!doctype html>
<html ng-app="app">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel Angular</title>

    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/sweetalert.css">
    <link rel="stylesheet" href="./css/fonts.css">
    <link rel="stylesheet" href="./css/font-awesome.min.css">
    <link rel="stylesheet" href="./css/daterangepicker.css">
  </head>
  
  <body>
    <div ui-view="main-content"></div>
  </body>

  <script src="./libraries/jquery.min.js"></script>
  <script src="./libraries/sweetalert.min.js"></script>
  <script src="./libraries/angular.min.js"></script>
  <script src="./libraries/angular-ui-router.min.js"></script>
  <!-- <script src="https://use.fontawesome.com/9830ebe28d.js"></script> -->
  <!-- <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script> -->
  <script src="./libraries/moment.min.js"></script>
  <script src="./libraries/daterangepicker.js"></script>
  <script src="./libraries/alpine.min.js"></script>
  <script src="./process/app.js"></script>


  <!-- directives -->
  <script src="../../templates/home/function.js"></script>
  <script src="../../templates/profile/function.js"></script>
  <script src="../../templates/tasks/function.js"></script>
  <script src="../../templates/mike/function.js"></script>
  <script src="../../templates/users/function.js"></script>
  <script src="../../templates/mikeExam/function.js"></script>
  <script src="../../templates/transactions/function.js"></script>
  <script src="../../templates/myTransaction/function.js"></script>
</html>
