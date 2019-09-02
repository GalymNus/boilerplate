interface IUserData {
  email: String;
  name: String;
}

enum UserActionType {
  "USER_CREATE" = "USER_CREATE"
}

interface IUserAction {
  type: UserActionType;
  payload: UserData | null;
}
export type UserAction = IUserAction;
export type UserData = IUserData;
export { UserActionType };
