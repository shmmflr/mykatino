export const advarReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_ADVAR':
      return { ...action.payload };

    default:
      return state;
  }
};
