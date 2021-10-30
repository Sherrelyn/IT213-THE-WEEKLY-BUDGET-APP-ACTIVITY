//Classes

class Budget {
    constructor(budget) {
        this.budget = Number (budget);
        this.budgetLeft = this.budget;

    }

    // Substract from the budget
    substractFromBudget(amount) {
        return this.budgetLeft -= amount;

    }
}
 
// Everything related to HTML
	class HTML{

        // Inserts the budget when the user submits iy
        insertBudget(amount) {
            console.log(amount);
            // Insert into HTML
            budgetTotal.innerHTML = `${amount}`;
            budgetLeft.innerHTML = `${amount}`;

        }


        //Displays a message (correct or invalid)
        printMessage(message, className) {
            const messageWrapper = document.createElement('div');
            messageWrapper.classList.add('text-center', 'alert', className);
            messageWrapper.appendChild(document.createTextNode(message));

            // Insert into HTML
            document.querySelector('.primary').insertBefore(messageWrapper,addExpenseForm);

            //Clear the error
            setTimeout(function () {
                document.querySelector('.primary .alert').remove();
                addExpenseForm.reset();
            }, 3000);
            


        }
        // Displays the expense from the form in into the list
        addExpenseToList(name, amount) {
            const expenseList = document.querySelector('#expenses ul');

            // Create a li
            const li = document.createElement('li');
            li.className ="list-group-item d-flex justify-content-between a lign-items-center";
            // Create the template
            li.innerHTML = `
            ${name}
            <span class="badge badge-primary badge-pill">$ ${amount}</span>
            `;

            // Insert into the HTML
            expenseList.appendChild(li);
        }

    // Subtract expense amount from budget
    trackBudget(amount) {
        const budgetLeftDollars = budget.substractFromBudget(amount);
        budgetLeft.innerHTML = `${budgetLeftDollars}`;

        // Check when 25% is left
        if( (budget.budget / 4 ) > budgetLeftDollars ){
            budgetLeft.parentElement.parentElement.classList.remove('alert-success', 'alert-warming');
            budgetLeft.parentElement.parentElement.classList.add('alert-danger');
            
        }else if( (budget.budget / 2 ) > budgetLeftDollars ) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-success');
            budgetLeft.parentElement.parentElement.classList.add('alert-warning');

        }

    }

    }
 
	 
//Variables
    const addExpenseForm = document.querySelector('#add-expense'),
   budgetTotal = document.querySelector('span#total'),
   budgetLeft = document.querySelector('span#left');
	
    let budget, userBudget;

    // Instanciate the HTML CLASS
    const html = new HTML()

	 
	
	 
	 
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
        } else {
            // Budget is valid then instanciate the budget class
            budget = new Budget(userBudget);

            // Instanciate HTML Class
            html.insertBudget(budget.budget);


        }

    });

// When a new expense is added
addExpenseForm.addEventListener('submit', function(e) {
    e.preventDefault()

    //Read the input values
    const expanseName = document.querySelector('#expense').value;
    const amount = document.querySelector('#amount').value;


    if(expanseName === '' || amount === '') {
        html.printMessage('There was an error, all the fields are mandatory', 'alert-danger');

    } else {
        html.addExpenseToList(expanseName, amount);
        html.trackBudget(amount);
        html.printMessage('Added...', 'alert-success');
    }

});

}