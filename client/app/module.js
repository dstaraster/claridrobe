angular
    .module('app', ['toaster', 'ngAnimate', 'ngRoute'])
    .constant('config', {'host': 'http://localhost:5000/'})
    .config(function ($routeProvider) {
        $routeProvider

            .when('/gallery', {
                templateUrl: 'gallery/gallery.html',
                controller: 'GalleryController'
            })

            .when('/outfit', {
                templateUrl: 'outfit/outfit.html',
                controller: 'OutfitController'
            })

            .when('/style', {
                templateUrl: 'style/style.html',
                controller: 'StyleController'
            })

            .when('/upload', {
                templateUrl: 'upload/upload.html',
                controller: 'UploadController'
            })

            .when('/', {
                templateUrl: 'home/home.html'
            });
    });

