app.directive('usersDirective', [
  '$state',
  '$http',
	function directive($state, $http) {
		return {
			restrict: "A",
			scope: true,
			link: function link( scope, element, attributeSet ) {
        console.log("usersDirective Runnning !");
        scope.usersArr = [];

        scope.addUserData = {};

        scope.getUsersList  = function(){
          // http request for user list data
          $http.get(`https://mednefits.getsandbox.com/users`)
            .success(function(response){
              console.log(response);
              scope.usersArr = response;
            })
            .error(function(response){
              console.log(response);
            });
        }

        scope.submitAddUser  = function(formData){
          let data = {
            id: formData.id,
            name: formData.name,
            gender: formData.gender,
            age: formData.age,
            status: formData.status,
          }
          
          $http.post(`https://mednefits.getsandbox.com/users`, data)
            .success(function(response){
              console.log(response);

              // reset form object data to blank
              scope.addUserData = {};
              // call user list http request again to refresh table data
              scope.getUsersList();
            });
        }
        
				scope.onLoad = function () {
          // call user table data
          scope.getUsersList();
				}
				scope.onLoad();
			}
		}
	}
]);
