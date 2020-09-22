app.directive('transactionsDirective', [
	'$state',
	'$http',
	function directive($state,$http) {
		return {
			restrict: "A",
			scope: true,
			link: function link( scope, element, attributeSet ) {
        console.log("transactionsDirective Runnning !");
				
				
				
				scope.initializeDatePicker	=	function(){
					$('.datepicker').daterangepicker({
						singleDatePicker: true,
						showDropdowns: true,
						startDate: moment(),
						locale: {
							format: 'DD/MM/YYYY',
						}
					});
				}

				scope.resetAllData	=	function(){
					$http.get(`https://mednefits.getsandbox.com/transactions/delete-all`)
						.success(response =>{
							swal('Success!', 'reset.', 'success');
						})
				}
				scope.onLoad = function () {
					scope.initializeDatePicker();
				}
				scope.onLoad();
			}
		}
	}
]);
