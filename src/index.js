import { log } from './utils';
import './todos.css';

import { printTodos } from './print-todos';
import { init as initForm } from './form';
import {get as getStorage} from './storage'


const todos = getStorage() || [];

//
// 폼,input 입력 이벤트 추가하기
// 입력했을때 todo추가


const deleteTodo = (index) => {
  console.log('delete', index);
  // todos에서 index번째 todo 삭제
  todos.splice(index, 1);
  print();
};
const toggleTodo = (index) => {
  console.log('toggle');
  todos[index].isDone = !todos[index].isDone;
  print;
};

const print = () => {
  printTodos(todos);
};

// 삭제
document.body.addEventListener('click', (event) => {
  const index = parseInt(event.target.parentNode.dataset.index, 10);
  if (event.target.className === 'delete') {
    deleteTodo(index);
  } else if (event.target.className === 'toggle-checked') {
    toggleTodo(index);
  }
});

initForm(todos);
// todos 출력
print();