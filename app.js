angular.module('flapperNews', [])
.controller('MainCtrl', [
  '$scope',
  // Scope function to display posts
  function($scope){
    $scope.posts=[
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ];
    // Appends new post to the scope.posts variable
    $scope.addPost = function(){
      $scope.posts.push({title: $scope.title, upvotes: 0});
      $scope.title = '';
      // Prevents user from submitting blank title
      if(!$scope.title || $scope.title === '') { return; }
    };
  }]);
