// const { lastIndexOf } = require("lodash");

app.directive('mikeDirective',[

    '$state',
        function directive($state){
            return{
                restrict: "A",
                scope: true,
                link: function link(scope){
                   
                   scope.namesArr = [
                       {
                           id: 1,
                           name: 'mike',
                           gender: 'male',
                           status: 'online'
                       },
                       {    
                            id: 2,
                            name: 'buffy',
                            gender: 'male',
                            status: 'offline'
                        },
                        {
                            id: 3,
                            name: 'doh',
                            gender: 'female',
                            status: 'online'
                        }
                   ];

                   

                // DELETE
             scope.deleteName  = (rowData, index) =>{
                swal({
                  title: "Confirm",
                  text: "Are you sure you want to delete?",
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonText: "Confirm",
                  cancelButtonText: "No",
                },
                function () {
                    scope.namesArr.splice(index, 1);
                    scope.$apply();
                });
              }
              // Delete Offline
              scope.showOnline = () =>{
                scope.namesArr.forEach(element => {
                    if (element.status != "online") {
                        let myDelete = scope.namesArr.indexOf(element);
                        scope.namesArr.splice(myDelete, 1)

                    }
                });
            }
             // EDIT
            let editModal = document.querySelector('.edit__modal');
             // open edit
             scope.user ={};
             scope.editUser = (list) =>{
                editModal.setAttribute('style','display:block')
                scope.user.name = list.name;
                scope.user.gender = list.gender;
                scope.user.status = list.status;
             }
             scope.UpdateUser = (userUpdate)=>{
                    console.log(userUpdate);
                    
             }
           
           
           
           
           
             // close edit
            let btnClose = document.querySelector('.btnClose');
            btnClose.addEventListener('click', e =>{
                editModal.setAttribute('style','display:none')
            });



                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                }
                
            }
        }  
])
