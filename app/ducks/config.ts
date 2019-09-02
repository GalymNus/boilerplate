import { paths as UserPath, initState as UserInitState } from "./user";

const Paths = {
  ...UserPath
};

const IntialState = {
  user: { ...UserInitState }
};

export { Paths, IntialState };
