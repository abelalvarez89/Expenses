(function(){
	var app = angular.module('storeApp', []);

	app.controller('StoreController', function(){
		this.stores = tempStores;
	});

	app.controller('DateController', function(){
		this.date = '';

		this.getDate = function(){
			var temp = new Date();
			this.date = temp.toLocaleString();
		}
	});

	app.controller('FormController', function(){

		this.tempOutObject = tempOut;

		this.setValues = function(store, amount, date){
			if(localStorage.indexed !== "0"){
		  		localStorage.indexed = 0;
		  		var temp = [];
		  		localStorage["outputArray"] = JSON.stringify(temp);
		  	}
		  	localStorage.store = store;
		  	localStorage.amount = amount;
		  	localStorage.date = date;
		};

		this.showOutput = function(){
			var str = JSON.parse(localStorage["outputArray"]);

	  		var res = str.split("%n");
	  		var i = 0;
	  		this.tempOutObject = [];
	  
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
		  	this.tempOutObject.push(temp);
		}

		};

		this.addValues = function(){
			if(localStorage.store == "undefined"){
	    		this.showOutput();
	    		return;
    		}
    		
    		tempValues.store = localStorage.store + "%e";
    		tempValues.amount = localStorage.amount + "%e";
    		tempValues.date = localStorage.date + "%n";
    		
    		var newArray = JSON.parse(localStorage["outputArray"]);
	  		localStorage["outputArray"] = JSON.stringify(newArray + tempValues);
    		

		};

		this.getValues = function(){
			if(localStorage.testing == "undefined"){
				localStorage["outputArray"] = [];
				return;
			}
			var temp = JSON.parse(localStorage["outputArray"]);
		};
	});

	var tempStores = [
		'Chipotle','Home Depot','McDonald',
		'Panda Express','Papa Johns','Pizza Hut',
		'Publix','Shell','Subway','Walmart'
	];
	var tempOut = [];
	var tempValues = {
		"store":'',
		"amount":'',
		"date":''
	};
})();