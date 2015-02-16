angular.module('app.controllers', [
    "ng.contentful"
])

    .controller('BootstrapCtrl',
    ['$scope', '$state', '$timeout', '$ionicLoading', '$ionicModal', '$q', '$ionicViewService', 'contentDeliveryApi',
        function ($scope, $state, $timeout, $ionicLoading, $ionicModal, $q, $ionicViewService, contentDeliveryApi) {

            $scope.name = 'BootstrapCtrl';

            $ionicLoading.show({

                // todo: manage connectivity status?
                "template": "Getting Data..."

            });


            $ionicModal.fromTemplateUrl('templates/bootstrap-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function() {
                $scope.modal.show();
            };
            $scope.closeModal = function() {
                $scope.modal.hide();
            };
            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
                $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
                // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
                // Execute action
            });

            // pseudo code:
            // get contenttypes
            // if success, save to cache
            // if failure, check for cached content items
            // if cached content items does not exist then display critical error
            // allow user to try again
            // if cached content items do exist, redirect user to home page

            // get content types

//            contentDeliveryApi.getContentTypes().then(
//                function (response){ // fulfilled
//
//                    $ionicLoading.hide();
//
//                    console.log("response", response); // todo: delete me
//
//                },
//                function (reason) { // rejected
//
//                    $ionicLoading.hide();
//
//
//                },
//                function (notification) { // progress
//
//                }
//
//            );


            // use the following code for testing only
            $timeout(function () {

                $ionicLoading.hide();

                showModal();
//                $state.go("app.home");


            }, 1000)

            function showModal(){
                $timeout(function () {

                    $scope.openModal();

                }, 3000)
            }


        }])

    .controller('HomeCtrl',
    ['$scope', '$ionicHistory', '$timeout',
        function ($scope, $ionicHistory, $timeout) {

            $ionicHistory.clearHistory(); // prevents the back button being displayed.

            $scope.name = 'HomeCtrl';

            $scope.doRefresh = function () {
                $timeout(function () {

                    $scope.$broadcast('scroll.refreshComplete');

                }, 1000)
            }

            $scope.isScrolling = function (args) {
                console.log("is scrolling", args); // todo: delete me
            }


        }])



    .controller('ChatsCtrl', function ($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        }
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('FriendsCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
