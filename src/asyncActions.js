export const loadExpenses = () => {
    return async dispatch => {
      try {
        // Simulate loading expenses from an API
        const response = await fetch('https://api.example.com/expenses');
        const expenses = await response.json();
  
        dispatch({
          type: 'LOAD_EXPENSES',
          payload: expenses,
        });
      } catch (error) {
        console.error('Error loading expenses:', error);
      }
    };
  };
  
  export const saveExpense = expense => {
    return async dispatch => {
      try {
        // Simulate saving expense to an API
        const response = await fetch('https://api.example.com/expenses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(expense),
        });
  
        const savedExpense = await response.json();
  
        dispatch({
          type: 'ADD_EXPENSE',
          payload: savedExpense,
        });
      } catch (error) {
        console.error('Error saving expense:', error);
      }
    };
  };
  