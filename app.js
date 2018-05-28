angular.module('flapperNews', ['ui-router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home', {
      url:'/home',
      templateUrl:'/home.html',
      controller:'MainCtrl'
    });

    $urlRouterProvider.otherwise('home')
  }])
.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])

.controller('MainCtrl', [
  '$scope',
  'posts',
  // Scope function to display posts
  function($scope, posts){

    $scope.posts = posts.posts;

    // Appends new post to the scope.posts variable
    $scope.addPost = function(){
      // Prevents user from submitting blank title
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    };
  }]);
