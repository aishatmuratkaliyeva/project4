export const setFilter = filter => {
    return {
      type: 'SET_FILTER',
      payload: filter,
    };
  };
  
  export const setSort = sort => {
    return {
      type: 'SET_SORT',
      payload: sort,
    };
  };
  
  const filtersReducer = (state = { filter: 'all', sort: 'date' }, action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return { ...state, filter: action.payload };
      case 'SET_SORT':
        return { ...state, sort: action.payload };
      default:
        return state;
    }
  };
  
  export default filtersReducer;
  