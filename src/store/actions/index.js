export const fetchingData = (action) => (dispatch) => {
  dispatch(action());
};

export {
  getTodos,
} from './todos';