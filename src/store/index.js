import { defineStore } from 'pinia'
import { ref } from 'vue'

export const todoStore = defineStore('todo', () => {
  // 代办事件
  const todoList = ref([
      { name: '踢足球', time: '05-10 16:00:00', detail: '无', value: '踢足球' },
      { name: '打篮球', time: '05-11 16:30:00', detail: '准备去某个篮球场打球', value: '打篮球' },
      { name: '打乒乓球', time: '05-10 17:00:00', detail: '准备去某个篮球场打球准备去某个篮球场打球准备去某个篮球场打球准备去某个篮球场打球准备去某个篮球场打球准备去某个篮球场打球准备去某个篮球场打球准备去某个篮球场打球', value: '打乒乓球' },
    ])
  // 获取代办事件
  const getTodoList = () => {
    todoList.value = JSON.parse(localStorage.getItem('todoList')) || []
  }

  // 新增代办事件
  const addTodo = (todo) => {
    todoList.value.push(todo)
    localStorage.setItem('todoList', JSON.stringify(todoList.value))
  }

  // 删除代办事件
  const deleteTodo = (todo) => {
    todoList.value = todoList.value.filter(item => item.value !== todo.value)
    localStorage.setItem('todoList', JSON.stringify(todoList.value))
  }

  // 修改代办事件
  const updateTodo = (index, todo) => {
    todoList.value[index] = todo
  }

  return {
    todoList,
    getTodoList,
    addTodo,
    deleteTodo,
    updateTodo,
  }

})