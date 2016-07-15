var app = angular.module('App',[]);
          app.controller('Ctrl1',function($scope,$http){
		  $scope.addValue = false;
		  $scope.value = true;
		  $scope.value2 = false ;
		     $scope.disable = false;
		  $scope.value3 = false;
		 $scope.employee=[];
		  
		  $scope.addEmp = function(add){
			 if( $scope.Form1.$valid ) 
			 { 
		       $http.post( 'http://localhost:6050/api/addUser',$scope.add).success(function(data){

			  $scope.employee= [data.users].concat($scope.employee);
			  
				
		      })
		 }
		 
			 else if($scope.Form1.$invalid){
				 alert("else if block");
				 $scope.addValue = true ;
  $scope.value2 = false ;
			  		  $scope.value3 = false ;				 
			 }
		 }
		 
		  var res;
		  var indexval;
		  $scope.edit = function(index){
			  indexval=index;
			   res=$scope.employee[index]
			   $scope.add=res;
			  $scope.value = false;
			  $scope.value2 = true ;
			  $scope.value3 = false ;
			  $scope.disable=false;
			  }
			  
		  
		  $scope.update = function(){
			  if( $scope.Form1.$valid ) {
				var userupdate=$scope.add;
				var index={'index': indexval};
				var user=[index].concat(userupdate);
				var indf=user[0]
			 $http.put('http://localhost:6050/api/editUser',user).success(function(data){
				 //alert("update function");
				   $scope.add=data.data;
		    	  })
			  }
			  
			  
			
		}
			  
			
			  
		 $scope.view = function(index){
			
			 var res=$scope.employee[index]
			  $scope.add=res;
			  $scope.value = false;
			  $scope.value2 = false;
			  $scope.value3 = true ;
		$scope.disable=true;
			 
		 }
		 
		 
		  
		  $scope.deleteUserData = function(index){
			
			 var user= $scope.employee[index];
			  
			  // $scope.init();
			   $http.delete('http://localhost:6050/api/deleteUser',index).success(function(data){
				 //alert("update function");
				  
		    	  })
				  $scope.employee.splice(index,1);
			  
		  }
		  
		  $scope.init = function(){

			  $http.get('http://localhost:6050/api/loadData').success(function(data){
                			 
				 $scope.employee=data.users;

			  }
				  )
			  
		  }
		  $scope.init();
		  });