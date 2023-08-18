import './App.css';
import { useState } from 'react'
import Task from './Task';

function App() {
  const [task, setTask] = useState ([
    { text: 'Go to gym', checked: true },
    { text: 'Drink Coffee', checked: false }
  ])

  const [newTask, setNewTask] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target[0].value)
    //TODO Add a new task to the tasks array
    //HINT: Spread the current tasks array into a new array, add this new task on there
    //then update the states of the stask
    if (newTask) {
      setTask([...task, {text: newTask, checked: false}])
      setNewTask('')
      event.target[0].value = ''
    }
  }

  const handleDelete = (index) => {
    //TODO Using the provided index, remove the task from the array and update 
    //state to re-render the component
    //Hint .filter()
    setTask(arr => {
      return arr.filter((value, i) => i !== index)
    })
  }

  const handleUpdate = (index, checked) => {
    //TODO Find the task by the provided index
    //Change the checked property on the task
    //Update the state array to re-render the component
    //Hint .map() or access by index
    setTask(prevArr => {
      return prevArr.map((task, i) => {
        if (i === index) {
          return {...task, checked: checked }
        }
        return task
      })
    })
  }

  return (
    <div className="app">
      <main>
        <form onSubmit={handleSubmit}>
          <input type="text" name='task' onChange={(event) => setNewTask(event.target.value)}/>
          <button type="submit">Add task</button>
        </form>
        {
          task.map((todoItem, index) => {
            return (
              <Task 
                key={index} 
                task={todoItem} 
                index={index} 
                handleDelete={handleDelete} 
                handleUpdate={handleUpdate}
              />
            )
          })
        }
      </main>
    </div>
  );
}

export default App;
