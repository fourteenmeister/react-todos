import React from 'react';

import Todo from "./Todo";
import getData from "../hoc/getData";
import { getTodos } from "../store/actions/todos";

const TodoList = props => {
  const { todos, ...rest } = props;
  return (
    <div className="container has-text-centered">
      {todos.map(todo => {
        return (
          <Todo key={todo.id} {...todo} {...rest}/>
        )
      })}
    </div>
  );
};

export default getData(TodoList, getTodos, 'todos');