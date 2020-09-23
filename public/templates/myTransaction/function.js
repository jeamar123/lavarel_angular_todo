

app.directive('mytransactionDirective', [
    '$state',
    '$http',
      function directive($state, $http) {
          return {
              restrict: "A",
              scope: true,
              link: function link( scope, element, attributeSet ) {

// VARIABLES           
scope.transactionArr = [];
scope.newTransaction = {};
scope.UpdateBtn = false;


           



            // SHOWING TRANSACTION LIST
            scope.getTransactionList = () =>{
                $http.get(`https://mednefits.getsandbox.com:443/transactions`)
                .success( response =>{
                    scope.transactionArr = response;
                })
            };

            // ADD AND UPDATE
            scope.addNewTransaction = newTransactionFormData =>{              
              if(scope.UpdateBtn == true){
                let editTransactionPayload = {
                    id: newTransactionFormData.id,
                    name: newTransactionFormData.name,
                    service: newTransactionFormData.service,
                    payment_due: newTransactionFormData.payment_due,
                    payment_amount_due: newTransactionFormData.payment_amount_due,
                  }
                    $http.post(`https://mednefits.getsandbox.com:443/transactions/update`, editTransactionPayload)
                    .success(response =>{
                        scope.newTransaction = {};
                        scope.getTransactionList();
                        scope.UpdateBtn = false;
                    });
              }else{
                let newTransactionPayload = {
                    name: newTransactionFormData.name,
                    service: newTransactionFormData.service,
                    payment_due: newTransactionFormData.payment_due,
                    payment_amount_due: newTransactionFormData.payment_amount_due,
               }   
                    $http.post(`https://mednefits.getsandbox.com:443/transactions/create`, newTransactionPayload)
                    .success(response =>{
                        scope.newTransaction = {};
                        scope.getTransactionList();
                });
              }

            }

            // DELETE
            scope.deleteTransaction = listRow =>{
                $http.get(`https://mednefits.getsandbox.com:443/transactions/delete/` + listRow.id)
                .success(response =>{
                    scope.getTransactionList();
                })
            }

// PAYMENT SECTION
scope.payment = {};

scope.addPayment = paymentFormData =>{

    let paymentPayload = {
        id: scope.selected_id,
        payment_date: paymentFormData.payment_date,
        payment_amount: paymentFormData.payment_amount,
    }
    $http.post(`https://mednefits.getsandbox.com:443/transactions/record_payment`, paymentPayload)
    .success(response =>{

    })
}


// FUNCTIONS SECTION
// UPDATE BUTTON
scope.updateTransaction = listUpdateRow =>{
    scope.newTransaction.id = listUpdateRow.id
    scope.newTransaction.name = listUpdateRow.name
    scope.newTransaction.service = listUpdateRow.service
    scope.newTransaction.payment_due = listUpdateRow.payment_due
    scope.newTransaction.payment_amount_due = listUpdateRow.payment_amount_due
    scope.UpdateBtn = true;
    scope.showForm();
}
// SHOW FORM
scope.showForm = () =>{
    let mainForm = document.querySelector('.form')
    mainForm.classList.add('form-js');
}
// MODAL OPEN
scope.modalForm = (list)=>{
    let formModal = document.querySelector('.formModal');
    formModal.classList.add('formModal-js');

    scope.selected_id = list.id;
}
// MODAL CLOSE
scope.modalClose = ()=>{
    let formModal = document.querySelector('.formModal');
    formModal.classList.remove('formModal-js');
    scope.selected_id = null;
}
// DATE PICKER
scope.initializeDatePicker	=	function(){
    $('.datepicker').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        startDate: moment(),
        locale: {
            format: 'DD/MM/YYYY',
            }
        });
    };




























  
            scope.resetAllData	=	function(){
                $http.get(`https://mednefits.getsandbox.com/transactions/delete-all`)
                    .success(response =>{
                        swal('Success!', 'reset.', 'success');
                    })
            }

        scope.onLoad = function () {
            scope.initializeDatePicker();
            scope.getTransactionList();
            
                }
        scope.onLoad();
              }
          }
      }
  ]);
  