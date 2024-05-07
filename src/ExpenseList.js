import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from './actions';
import { getFilteredAndSortedExpenses } from './selectors';


const ExpensesList = ({ expenses, deleteExpense }) => {
  return (
    <div>
      <h2>Expenses List</h2>
      <ul className="expense-list">
        {expenses.map(expense => (
          <li key={expense.id} className="expense-item">
            {expense.name} - {expense.amount} - {expense.date}
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = dispatch => ({
  deleteExpense: id => dispatch(deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);

