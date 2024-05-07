export const addExpense = expense => {
  return {
    type: 'ADD_EXPENSE',
    payload: expense,
  };
};

export const deleteExpense = id => {
  return {
    type: 'DELETE_EXPENSE',
    payload: id,
  };
};

export const updateTotal = total => {
  return {
    type: 'UPDATE_TOTAL',
    payload: total,
  };
};
