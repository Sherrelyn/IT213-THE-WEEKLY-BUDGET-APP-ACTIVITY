//Classes
 
	 
 
	 
//Variables
    const addExpenseForm = document.querySelector('#add-expense');
	
    let budget, userBudget;
	 
	
	 
	 
//Event Listeners	  
   eventListeners();
   function eventListeners() {

    //App Init
    document.addEventListener('DOMContentLoaded', function () {
        //Ask the visitor the weekly budget
        userBudget = prompt('What is your budget for this week?');
        // validate the user budget
        if(userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload();
        }

    });

// When a new expense is added
    addExpenseForm.eventListeners('submit', function(e) {
        e.preventDefault();

    });
}