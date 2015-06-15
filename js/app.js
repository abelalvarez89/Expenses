(function(){
var app = angular.module('expenses', []);

app.controller("OutputController", function(){
	this.product = outputObj;
});
	
app.controller("LocationController", function(){

this.productObj = expensesObject;

this.getDate = function(){
	this.productObj.showDate = true;
};

});

app.controller('ReviewController', function() {
  this.review = {};

  this.addReview = function(product) {
    outputObj.comments.push(product.date);
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

var outputObj = {
	comments:[
		
		]
};

})();
