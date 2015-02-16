angular.module('app.components', [])
    .directive('mikesHeader', function () {
        return{
            scope: {
                photo: '@',
                showburger: '@'
            },
            restrict: 'E',
            replace: 'true', // important: otherwise menu toggle won't work!!
            templateUrl: 'templates/header.html',

            controller: function ($scope, $ionicHistory) {

                console.log("$ionicHistory",$ionicHistory); // todo: delete me


//                console.log($scope.photo); // todo: delete me

                $scope.showBurger = (canGoBack() === false);

                $scope.showBack = canGoBack();


                // used by the back arrow
                $scope.back = function () {
                    $ionicHistory.goBack();
                    

                };

                function canGoBack() {

                    if($ionicHistory.backView()){

                        var currentView = $ionicHistory.currentView();

                        if(currentView.stateId === "app.home"){
                            return false
                        }

                        return true;
                    }
                    else{
                        return false;
                    }

                }

//                function booleanCheck(string) {
//                    if (string) {
//                        switch (string.toLowerCase()) {
//                            case "true":
//                            case "yes":
//                            case "1":
//                                return true;
//                            case "false":
//                            case "no":
//                            case "0":
//                            case null:
//                                return false;
//                            default:
//                                return false;
////                                default: return Boolean(string);
//                        }
//                    }
//                    else {
//                        return false
//                    }
//                }
            }
        }
    })
;