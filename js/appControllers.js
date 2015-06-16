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

		this.addValues = function(){
			if(localStorage.store == "undefined"){
	    		this.showOutput();
	    		return;
    		}
    		if(localStorage.indexed == "undefined"){
	    		var temp = [];
		  		localStorage["outputArray"] = JSON.stringify(temp);
    		}
    		tempValues.store = localStorage.store;
    		tempValues.amount = localStorage.amount;
    		tempValues.date = localStorage.date;
    		
    		var values = JSON.stringify(tempValues);
    		

    		var temp = [];
    		var i;
    		for(i = 0; i < localStorage.getItem("outputArray").length; i++){
    			temp[i] = JSON.parse(localStorage.getItem("outputArray"))[i];
    		}
    		

    		var tempOld = JSON.stringify(temp);
    		if(tempOld == "[]"){
    			tempOld = '';
    			localStorage.setItem("outputArray", values);
    		}
    		localStorage.setItem("outputArray", [values, tempOld]);
    		

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

	var tempValues = {
		"store":'',
		"amount":'',
		"date":''
	};
})();