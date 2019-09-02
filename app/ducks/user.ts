import {
  UserAction as Action,
  UserActionType as ActionType,
  UserData
} from "./types";

// IntialState
export const initState: UserData = {
  email: "",
  name: ""
};

// Paths for cookies
export const paths = {
  "user.email": { name: "email" },
  "user.name": { name: "name" }
};

// State
export default (state: UserData = initState, action: Action) => {
  switch (action.type) {
    case ActionType.USER_CREATE:
      return {
        ...state,
        email: action.payload ? action.payload.email : "no email",
        name: action.payload ? action.payload.name : "no name"
      };
    default:
      return state;
  }
};

// Actions
export const createUser = ({ email, name }: UserData): Action => {
  return { type: ActionType.USER_CREATE, payload: { email, name } };
};
