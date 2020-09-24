

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
scope.payment = {};
scope.isUpdateTransactions = false;

// SHOWING TRANSACTION LIST
scope.getTransactionList = () =>{
    $http.get(`https://mednefits.getsandbox.com:443/transactions`)
        .success( response =>{
        scope.transactionArr = response;
        console.log(response);
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
    swal({
        title: "Transaction Updated",
        type: "success",
        icon: 'success',
    },function(isConfirm){
        if (isConfirm) {
            $http.post(`https://mednefits.getsandbox.com:443/transactions/update`, editTransactionPayload)
            .success(response =>{
            scope.newTransaction = {};
            scope.getTransactionList();
            scope.hideForm();
            scope.UpdateBtn = false;
            scope.isUpdateTransactions = false;
            });
        }
    }
    ) 
    }else{
    let newTransactionPayload = {
        name: newTransactionFormData.name,
        service: newTransactionFormData.service,
        payment_due: newTransactionFormData.payment_due,
        payment_amount_due: newTransactionFormData.payment_amount_due,
    }   
        swal({
            title: "Transaction Added",
            type: "success",
            icon: 'success',
        },
        function(isConfirm){
            if(isConfirm){
            $http.post(`https://mednefits.getsandbox.com:443/transactions/create`, newTransactionPayload)
            .success(response =>{
            scope.newTransaction = {};
            scope.hideForm();
            scope.getTransactionList();
            
            });
        }
    }
    )
    }
};

// DELETE TRANSACTION USER
scope.deleteTransaction = listRow =>{
    swal({
        title: "Confirm",
        text: "Are you sure you want to delete transaction?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        cancelButtonText: "No",
        },
        function(isConfirm){
            if(isConfirm){
                $http.get(`https://mednefits.getsandbox.com:443/transactions/delete/` + listRow.id)
                .success(response =>{
                scope.getTransactionList();
                    })
                }
            }
        )
    };


// ADD PAYMENT
scope.addPayment = paymentFormData =>{
    let paymentPayload = {
        id: scope.selected_id,
        payment_date: paymentFormData.payment_date,
        payment_amount: paymentFormData.payment_amount,
    }
    swal({
        title: "Payment Added",
        type: "success",
        icon: 'success',
    },
    function(isConfirm){
        if(isConfirm){
            $http.post(`https://mednefits.getsandbox.com:443/transactions/record_payment`, paymentPayload)
            .success(response =>{
                scope.modalClose();
                scope.getTransactionList();
            })
        }
    }
    )   
};

// DELETE PAYMENT
scope.removePayment = listRow=>{
    swal({
        title: "Confirm",
        text: "Are you sure you want to remove payment?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        cancelButtonText: "No",
    },
    function(isConfirm){
        if(isConfirm){
            $http.get(` https://mednefits.getsandbox.com:443/transactions/remove_payment/`+ listRow.id)
            .success(response =>{
            scope.getTransactionList();
            })
        }
    }
    )    
};


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
    scope.isUpdateTransactions = true;
}
// SHOW FORM
scope.showForm = () =>{
    let mainForm = document.querySelector('.form')
    mainForm.classList.add('form-js');
}
scope.hideForm = () =>{
    let mainForm = document.querySelector('.form')
    mainForm.classList.remove('form-js');
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

    scope.formatMomentDate  =   function(date,from,to){
        // date = date that needs to be formatted
        // from = current format of the date (e.g YYYY-MM-DD) or array of possible formats (e.g ['YYYY-MM-DD','DD/MM/YYYY'])
        // to = format that you needed
        return moment(date,from).format(to);
    }


























  
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
  