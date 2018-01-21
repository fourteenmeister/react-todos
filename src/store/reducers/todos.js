import { SET_TODOS } from "../actions/todos";

export default function (state = null, action) {
  const { type, todos } = action;
  switch (type) {
    case SET_TODOS:
      return todos;
    default:
      return state;
  }
}