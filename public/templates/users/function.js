app.directive('usersDirective', [
  '$state',
  '$http',
	function directive($state, $http) {
		return {
			restrict: "A",
			scope: true,
			link: function link( scope, element, attributeSet ) {

        scope.usersArr = [];

        scope.addUserData = {};

        // For getting the users
        scope.getUsersList  = () => {
          $http.get(`https://mednefits.getsandbox.com/users`)
            .success(function(successReponse){
              scope.usersArr = successReponse;
            })
            .error(function(errorReponse){
              errorReponse = 'API'
              console.log(`Error in conneting ${errorReponse}`);
            });
        }

        // For button ADD function
        scope.submitAddUser  = formData =>{
          let data = {
            id: formData.id,
            name: formData.name,
            gender: formData.gender,
            age: formData.age,
            status: formData.status,
          }
          
          //For adding the user in API
          $http.post(`https://mednefits.getsandbox.com/users`, data)
            .success(function(response){
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



