const initialState = {
  userPickupLocation: '',
  userDestiLocation: '',
};

const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_PICK_LOCATION': {
      return {
        ...state,
        userPickupLocation: action.value,
      };
    }
    case 'USER_DESTINATION_LOCATION': {
      return {
        ...state,
        userDestiLocation: action.value,
      };
    }
    default:
      return state;
  }
};

export default LocationReducer;
