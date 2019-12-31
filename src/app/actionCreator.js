export const getTodos = () => dispatch =>
  fetch('localhost:3000/todos', {
    headers: {
      'Content-Type': 'application.json',
      Accept: 'application/json',
    },
  })
    .then(res => res.json())
    .then(todos =>
      dispatch({
        type: 'CREATE_TODO',
        payload: todos,
      }),
    );
export const createTodo = todo => dispatch =>
  fetch('localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application.json',
      Accept: 'application/json',
    },
    body: JSON.stringify(todo),
  })
    .then(res => res.json())
    .then(todos =>
      dispatch({
        type: 'CREATE_TODO',
        payload: todos,
      }),
    );
