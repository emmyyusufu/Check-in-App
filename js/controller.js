angular.module('clockApp')

.controller('timeController', ['$scope', function($scope) {
    
    $scope.clock = new Date();
    
   var update = function() {
       $scope.clock = new Date();
   };
    
    setInterval(function() {
        $scope.$apply(update)
    }, 1000);
   
   update();
    
}])

    
.controller('mainController', ['$scope', function($scope) {
    
   
   
       var peoples = [  
      ];
    
    $scope.peoples = peoples;
    
    
         
    $scope.newname = "";
    
    
   $scope.login = function() {
       
       peoples.unshift({fname: $scope.newname, time:$scope.clock});
       $scope.loginForm.$setPristine();
       $scope.newname = "";
   };   
    
}])


