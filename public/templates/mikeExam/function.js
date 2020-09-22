app.directive('examDirective', [
    '$state',
    '$http',
      function directive($state, $http) {
          return {
              restrict: "A",
              scope: true,
              link: function link( scope, element, attributeSet ) {
  
          //blank array for users container
          scope.usersArr = [];
          //blank object for adding users
          scope.newUser = {};
          //button edit trap
          scope.isForUpdate = false;

          scope.btnName = "Add User";
  
          //getting users list
          scope.getUsersList = () =>{
            $http.get(`https://mednefits.getsandbox.com/users`)
            .success( successResponse =>{
              scope.usersArr = successResponse;
            })
            .error(errorResponse =>{
              errorResponse = 'API';
              console.log(`Error in connecting ${errorResponse}`);
            })
          };

          //adding and updating button 
          scope.addUserBtn = newUserFormData =>{
            let newUserData = {
                id: newUserFormData.id,
                name: newUserFormData.name,
                gender: newUserFormData.gender,
                age: newUserFormData.age,
                status: newUserFormData.status,
            }
           

            if( scope.isForUpdate == true){
              scope.btnName = "Edit User";
              $http.post(`https://mednefits.getsandbox.com:443/users/update/`+ newUserData.id, newUserData)
                .success(successResponse =>{
                  scope.newUser = {};
                  scope.isForUpdate = false;
                  scope.getUsersList();
                  
                  
                })
            }else{
              //for add
              scope.btnName = "Add User";
              $http.post(`https://mednefits.getsandbox.com/users`, newUserData)
              .success(successResponse =>{
                  scope.newUser = {};
                  scope.getUsersList();
              })
            }
           
          };

           //Delete User Button
           scope.deleteUser = listRow =>{
            swal({
                title: "Confirm",
                text: "Are you sure you want to delete?",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Confirm",
                cancelButtonText: "No",
              },
              function(isConfirm){
                  if (isConfirm) {
                    $http.get(`https://mednefits.getsandbox.com:443/users/delete/`+ listRow.id)
                    .success(successResponse =>scope.getUsersList())        
                    }
                }
                )
           }


          //Edit Button
          scope.editUser = listRow =>{
            scope.newUser.id =  listRow.id,
            scope.newUser.name = listRow.name,
            scope.newUser.gender = listRow.gender,
            scope.newUser.age = listRow.age,
            scope.newUser.status = listRow.status
            //making the edit button true
            scope.isForUpdate = true;
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
  