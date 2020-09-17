app.directive('profileDirective', [
	'$state',
	function directive($state) {
		return {
			restrict: "A",
			scope: true,
			link: function link( scope, element, attributeSet ) {
				console.log("profileDirective Runnning !");
        
        scope.updateProfileData = {}  
        scope.userInfoData = {
          name : 'Jeamar Libres',
          email : 'jeamar1234@gmail.com',
          age : 23
        }  
      

        scope.updateUserInfo  = function(formData){
          console.log(formData);
          scope.userInfoData = {
            name : formData.name ? formData.name : scope.userInfoData.name,
            email : formData.email ? formData.email : scope.userInfoData.email,
            age : formData.age ? formData.age : scope.userInfoData.age,
          }
        }
				scope.onLoad = function () {
					
				}

				scope.onLoad();
				
			}
		}
	}
]);
