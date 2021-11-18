export const getUserPickLocations = data => {
  return dispatch => {
    dispatch({type: 'USER_PICK_LOCATION', value: data});
  };
};

export const getUserDestinationLocations = data => {
  return dispatch => {
    dispatch({type: 'USER_DESTINATION_LOCATION', value: data});
  };
};
