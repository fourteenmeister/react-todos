export const REQUEST_TODOS = 'REQUEST_TODOS';
export const REQUEST_TODOS_COMPLETE = 'REQUEST_TODOS_COMPLETE';
export const REQUEST_TODOS_FAILURE = 'REQUEST_TODOS_FAILURE';
export const SET_TODOS = 'SET_TODOS';

const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = () => (dispatch) => {
  dispatch({
    type: REQUEST_TODOS
  });
  fetch(`${TODO_URL}?_limit=10`)
    .then(response => {
      dispatch({
        type: REQUEST_TODOS_COMPLETE
      });
      return response.json();
    })
    .then(todos => dispatch({
      type: SET_TODOS,
      todos,
    }))
    .catch(error => dispatch({
      type: REQUEST_TODOS_FAILURE,
      error,
    }));
};