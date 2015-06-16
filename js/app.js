(function(){
var app = angular.module('expenses', []);


app.controller("LocationController", function(){

this.productObj = expensesObject;

this.getDate = function(){
	this.productObj.showDate = true;
	this.productObj.date = new Date();
};

});

app.controller('ReviewController', function() {
  this.review = {};
  this.outputObj = localObj;

  
  this.setValues = function(indexs, totals, dates){
  	if(typeof(localStorage.indexing) == "undefined"){
  		localStorage.indexing = 0;
  		var t = [];
  		localStorage["testing"] = JSON.stringify(t);
  	}
  	localStorage.store = indexs;
  	localStorage.total = totals;
  	localStorage.date = dates;
  }

    this.addReview = function(product) {
    if(typeof(indexAt) == "undefined") {
    	localStorage.indexAt = 0;
    }
  	this.outputObj.total = "Publix";
  	var values = [localStorage.store + "%e", localStorage.total + "%e", localStorage.date + "%e"];

  	var newArray = JSON.parse(localStorage["testing"]);
  	localStorage["testing"] = JSON.stringify(newArray + "%n" + values);


  	//stopping here. This will be used to look up completed trasactions
  	var str = JSON.parse(localStorage["testing"]);

  	var res = str.split("%n");
  	
  };
});

var expensesObject = {
	showDate: false,

	date: new Date(),

	location: ['Chipotle','Home Depot',
	'McDonald','Panda Express','Papa Johns',
	'Pizza Hut','Publix','Shell','Subway',
	'Walmart'
	]
};

var localObj = {
	store: "",
	total: ''

}


})();
