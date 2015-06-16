(function(){
var app = angular.module('expenses', []);


app.controller("LocationController", function(){

this.productObj = expensesObject;

this.getDate = function(){
	this.productObj.showDate = true;

	var x = new Date();
	this.productObj.date = x.toLocaleString();
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

  	this.showOutput = function(){
  		
	  	var str = JSON.parse(localStorage["testing"]);

	  	var res = str.split("%n");
	  	var i = 0;
	  	this.outputObj = [];
	  
	  	for (i = 1; i < res.length; i++) { 
	  		var temp = {
	  			store: {},
				total: {},
				date: {}
			};
	      	var x = res[i].split("%e");
		  	temp.store = x[0];
		  	var noComma = x[1].split(",");
		  	temp.total = noComma[noComma.length-1];
		  	noComma = x[2].split(",");
		  	temp.date = noComma[noComma.length-1];
		  	this.outputObj.push(temp);
		}
  	}
  	if(localStorage.indexing == "0"){
  		this.showOutput();
  	}

    this.addReview = function(product) {
    	if(localStorage.store == "undefined"){
    		this.showOutput();
    		return;
    	}
    	var values = [localStorage.store + "%e", localStorage.total + "%e", localStorage.date];

  		var newArray = JSON.parse(localStorage["testing"]);
  		localStorage["testing"] = JSON.stringify(newArray + "%n" + values);
		this.showOutput();
		location.reload();
	};
});

var expensesObject = {
	showDate: false,

	date: new Date(),

	location: ['Babys R Us','Chipotle','Home Depot',
	'McDonald','Panda Express','Papa Johns',
	'Pizza Hut','Publix','Shell','Subway',
	'Walmart','Other'
	]
};

var localObj = []
var val = {
	store: {},
	total: {},
	date: {}

}


})();
