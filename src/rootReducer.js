import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import counterReducer from "./counter/redux";
import postsReducer from "./posts/redux";
import usersReducer from "./users/redux";
import uiReducer from "./ui/redux";
import taskReducer from "./Todo/redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
  users: usersReducer,
  ui: uiReducer,
  form: formReducer,
  tasks: taskReducer,
});

export default rootReducer;
