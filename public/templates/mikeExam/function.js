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
            //container for new or updated user
            let newUserData = {
                id: newUserFormData.id,
                name: newUserFormData.name,
                gender: newUserFormData.gender,
                age: newUserFormData.age,
                status: newUserFormData.status,
            }
         
            //for add
            $http.post(`https://mednefits.getsandbox.com/users`, newUserData)
            .success(successResponse =>{
                scope.newUser = {};
                scope.getUsersList();
            })
          
            //for edit
            // $http.post(`https://mednefits.getsandbox.com:443/users/update/`+ newUserData.id, newUserData)
            // .success(successResponse =>{
            //     scope.newUser = {};
            //     scope.getUsersList();
            // })


            
            // let userCondition = ()=>{
            //     if (userCondition) {
            //         $http.post(`https://mednefits.getsandbox.com/users`, newUserData)
            //         .success(successResponse =>{
            //             scope.newUser = {};
            //             scope.getUsersList();
            //         })
            //     } else {
            //         $http.post(`https://mednefits.getsandbox.com:443/users/update/`+ newUserData.id, newUserData)
            //         .success(successResponse =>{
            //          scope.newUser = {};
            //          scope.getUsersList();
            //         })
            //     }
            // }
            
           
          };

           //Delete User Button
           scope.deleteUser = listRow =>{
            $http.get(`https://mednefits.getsandbox.com:443/users/delete/`+ listRow.id)
            .success(successResponse =>{
              scope.usersArr.splice(listRow, 1);
              scope.getUsersList();
            });
           };

          //Edit Button
          scope.editUser = listRow =>{
                 scope.newUser.id =  listRow.id,
                 scope.newUser.name = listRow.name,
                 scope.newUser.gender = listRow.gender,
                 scope.newUser.age = listRow.age,
                 scope.newUser.status = listRow.status
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
  