import * as firebase from 'firebase';
import config from '../../configs/firebase_conf';

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
const todosRef = databaseRef.child('todos');

const addTodo = newTodo => (
  todosRef.push().set({ content: newTodo, done: false })
    .then(() => todosRef.once('value'))
    .then(snapshot => snapshot.val())
    .catch(error => error.message)
);

const removeTodo = todoId => (
  todosRef.child(todoId).remove()
);

const fetchTodos = () => (
  todosRef.once('value')
    .then(snapshot => snapshot.val())
);

const updateTodo = (id) => {
  const todoRef = todosRef.child(`${id}`);
  return todoRef.once('value')
    .then((snapshot) => {
      let value = snapshot.val(); // eslint-disable-line prefer-const
      value.done = !value.done;
      return todoRef.update(value).then(() => todosRef.once('value')).then(snap => snap.val());
    });
};

export default {
  addTodo,
  removeTodo,
  fetchTodos,
  updateTodo,
};
