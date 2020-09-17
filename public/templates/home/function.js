app.directive('homeDirective', [
	'$state',
	function directive($state) {
		return {
			restrict: "A",
			scope: true,
			link: function link( scope, element, attributeSet ) {
				console.log("homeDirective Runnning !");
        
        
        scope.showAlertClicked  = function(){
          swal('Success!', 'Nice one.', 'success');
        }
			

				scope.onLoad = function () {
					
				}

				scope.onLoad();
				
			}
		}
	}
]);
