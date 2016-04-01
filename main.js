
var app = angular.module("myApp", ["ngRoute"]);

app.controller("WelcomeController", [ "$scope", "$location", "$routeParams", function($scope, $location, $routeParams) {
    $scope.wordCheck = function(word) {
       console.log("inside word check function");
       console.log(word);
       $location.path('check/' + word);
    }
    
}]);

app.controller("CompareController", ["$scope", "$location", "$routeParams", function($scope, $location, $routeParams) {
    $scope.oldWord = $routeParams.param;
    console.log("inside compare function");
    console.log($scope.oldWord);
    $scope.lowerCaseWord = $scope.oldWord.toLowerCase();
    console.log($scope.lowerCaseWord);
    $scope.reverseWord = [];
    for (let i = ($scope.lowerCaseWord.length -1); i > -1; i--) {
        $scope.reverseWord = $scope.reverseWord + $scope.lowerCaseWord[i];
        console.log($scope.reverseWord);
    }
    if ($scope.lowerCaseWord === $scope.reverseWord) {
        $scope.message = "Is equal to";
        $scope.conclusion = "Therefore it is a palindrome";
    } else {
        $scope.message = "Is not equal to";
        $scope.conclusion = "Therefore it is not a palindrome";
    }
}])
    
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "welcome.html",
            controller: "WelcomeController"
        })
        .when("/check/:param", {
            templateUrl: "compare.html",
            controller: "CompareController"
        })
    }]);
