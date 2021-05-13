import React from "react"
import TodoItem from "./TodoItem"
const todosData = [
  {
      id : 1,
      text : "Take out the trash",
      completed:true
  },
     {
      id : 2,
      text : "Solve 5 questions",
      completed:true
  },
     {
      id : 3,
      text : "Breakfast",
      completed:false
  },
     {
      id : 4,
      text : "Workout for 1 hour",
      completed:true
  },
     {
      id : 5,
      text : "write assignments",
      completed:true
  },
  {
    id : 6,
    text : "Check emails",
    completed:true
},

{
  id : 7,
  text : "Cook dinner",
  completed:true
},
]

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App