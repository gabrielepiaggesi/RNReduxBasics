export default (state = null, action) => {
  //if state is undefined it will be null, to avoid errors
  switch(action.type){
    case 'select_library': return action.payload;
    default: return state;
  }
};
