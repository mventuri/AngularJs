'use strict';

angular.module('confusionApp')

.service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {

  this.getDishes = function(){
    return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
  };
  

  this.getPromotions = function () {
    return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});
  };

}])

.factory('corporateFactory',['$resource', 'baseURL', function($resource, baseURL) {

  var corpfac = {};
  
  corpfac.getLeaders = function(){
    return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
  };
  return corpfac;

}])

.factory('feedbackFactory',['$resource', 'baseURL', function($resource, baseURL) {

  var feedbackFac = {};
  feedbackFac.getFeedback = function(){
    return $resource(baseURL+"feedback/:id",null,  {'update':{method:'PUT' }});
  };
  feedbackFac.sendFeedback = function(feedback){
    return $resource(baseURL+"feedback/:id",null).save(feedback);
  };
  return feedbackFac;

}]);
