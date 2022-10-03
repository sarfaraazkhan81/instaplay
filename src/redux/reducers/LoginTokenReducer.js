export const LoginTokenReducer = (state = [], action) => {
  if (action.type === "LOGIN_TOKEN") {
    return action.payload;
    // onClick = { getTheToken };
    return action.payload;
  }

  return state;
};
