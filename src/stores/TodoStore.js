import { defineStore } from 'pinia';

export const useTodos = defineStore('todos', {
  state: () => ({
    /** @type {{ label: string, id: number, done: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.done)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.done)
    },
    /**
     * @returns {{ label: string, id: number, done: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // call other getters with autocompletion ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, done: false })
    },
  },
})
