document.addEventListener("DOMContentLoaded", function () {
    const expenseForm = document.getElementById("expense-form");
    const expensesList = document.getElementById("expenses-list");
    const totalExpenses = document.getElementById("total-expenses");
    const amountOwed = document.getElementById("amount-owed");
    

    const expenses = [];

    function updateDisplay() {
        expensesList.innerHTML = "";
        let total = 0;

        expenses.forEach((expense, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${expense.description}: $${expense.amount}  , ${expense.date}`;
            expensesList.appendChild(li);

            total += parseFloat(expense.amount);
        });
       totalExpenses.textContent = `Total Expenses: $${total.toFixed(2)}`;
    }
    expenseForm.addEventListener("submit", function (e) {
        expensesList.style.display="block"
        e.preventDefault();
        const description = document.getElementById("description").value;
        const amount = document.getElementById("amount").value;
        const date = document.getElementById("date").value;

        const newExpense = {
            description,
            amount,
            date,
        };

        expenses.push(newExpense);

        // Save to localStorage
        localStorage.setItem("expenses", JSON.stringify(expenses));

        updateDisplay();
        expenseForm.reset();
    });
    updateDisplay();
});
