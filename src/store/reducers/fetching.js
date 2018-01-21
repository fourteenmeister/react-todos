import { REQUEST_TODOS } from "../actions/todos";

export default function fetching(state = false, { type }) {
  switch (type) {
    case REQUEST_TODOS:
      return true;
    default:
      return false;
  }
};