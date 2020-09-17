app.directive('tasksDirective', [
	'$state',
	function directive($state) {
		return {
			restrict: "A",
			scope: true,
			link: function link( scope, element, attributeSet ) {
        console.log("tasksDirective Runnning !");
        scope.toListArr = [
          {
            id: 1,
            name: 'Jeamar',
            task: 'clean',
            date: '09/08/20',
            status: 'Pending',
          },
          {
            id: 2,
            name: 'Zed',
            task: 'play',
            date: '09/07/20',
            status: 'Pending',
          },
          {
            id: 3,
            name: 'Honglay',
            task: 'watch movie',
            date: '09/06/20',
            status: 'Pending',
          },
        ];

        scope.editToDo  = function(rowData, index){
          console.log(index);
          console.log(rowData);
          console.log('edit is clicked!');
        }
        scope.deleteTodo  = function(rowData, index){
          swal({
            title: "Confirm",
            text: "Are you sure you want to delete?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Confirm",
            cancelButtonText: "No",
          },
          function (isConfirm) {
            if (isConfirm) {
              scope.toListArr.splice(index,1);
              scope.$apply();
            }
          });
        }
        
				scope.onLoad = function () {
					
				}
				scope.onLoad();
			}
		}
	}
]);
