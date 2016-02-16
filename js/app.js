var ionicApp = angular.module('ionicApp', ['ionic']);


ionicApp.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('main', {
      url: '/main',
      controller: 'MainCtrl',
      templateUrl: 'js/template/main.html'
    })
    //tabs start
    .state('main.orderinfo', {
      url: "/orderinfo",
     //views: {
      //  'orderinfo-tab': {
          //templateUrl: "orderinfo.html",
          //controller: 'MainInfoCtrl'
      //  }
     // }
    })
    .state('main.orderproduct', {
      url: "/orderproduct",
      //views: {
        //'orderproduct-tab': {
          //templateUrl: "orderproduct.html",
          //controller: 'MainInfoCtrl'
       // }
      //}
    })
    //tabs end
    .state("otherwise", { 
      url : '/main'
    });
    $urlRouterProvider.otherwise('/main');
});


/*ionicApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'template/main.html'
  });
});*/
/*.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

  $stateProvider
    .state('menu', {
      url: "/menu",
      abstract: true,
      templateUrl: "menu.html",
      controller: 'MenuCtrl'
    })
    .state('menu.tabs', {
      url: "/tab",
      views: {
        'menuContent' :{
          templateUrl: "tabs.html"
        }
      }
    })
    .state('menu.tabs.buttons', {
      url: "/buttons",
      views: {
        'buttons-tab': {
          templateUrl: "buttons.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
    .state('menu.tabs.list', {
      url: "/list",
      views: {
        'list-tab': {
          templateUrl: "list.html",
          controller: 'ListCtrl'
        }
      }
    })
    .state('menu.tabs.item', {
      url: "/item",
      views: {
        'list-tab': {
          templateUrl: "item.html"
        }
      }
    })
    .state('menu.tabs.form', {
      url: "/form",
      views: {
        'form-tab': {
          templateUrl: "form.html"
        }
      }
    })
    .state('menu.keyboard', {
      url: "/keyboard",
      views: {
        'menuContent': {
          templateUrl: "keyboard.html"
        }
      }
    })
    .state('menu.slidebox', {
      url: "/slidebox",
      views: {
        'menuContent': {
          templateUrl: "slidebox.html",
          controller: 'SlideboxCtrl'
        }
      }
    })
    .state('menu.about', {
      url: "/about",
      views: {
        'menuContent': {
          templateUrl: "about.html"
        }
      }
    }).state('main', {
      url: "/",
      //controller: "MainCtrl",
      //views: {
        templateUrl: "main.html",
      //}
    });

  //$urlRouterProvider.otherwise("menu/tab/buttons");
  //$urlRouterProvider.otherwise("main");
  //$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  /*$urlRouterProvider
    .when('/main', {
      //controller : MainCtrl,
      templateUrl : 'template/main.html'               
    })
    .otherwise({redirectTo: '/main'});*/

//});           
              