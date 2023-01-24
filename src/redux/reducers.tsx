const initialState = '192.212.174.101';

const ipReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return action.ip
    default:
      return state;
  }
}
export default ipReducer;