angular.module("yourAppName.services",[])

.factory('stockDataService', function($q, $http){


  var getPriceData = function(ticker){

    var deferred = $q.defer();
    var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN%20(%22" + ticker + "%22)&format=json&env=http://datatables.org/alltables.env";

    //http://finance.yahoo.com/webservice/v1/symbols/YHOO/quote?bypass=true&format=json&view=detail
    $http.get(url)
    .success(function(json){
      var jsonData = json;
      console.log(jsonData);
    })
    .error(function(error){
      console.log("Price data error: " + error);
      deferred.reject();
    });

    return deferred.promise;
  };

  return {
    getPriceData: getPriceData
  };
});
