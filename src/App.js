import './App.css';
import Header from './components/Header';
import {useState} from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
const [tasks, setTasks] =  useState([
  {
    id:1,
    text: 'Doctors appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id:2,
    text: 'Meeting at school',
    day: 'Feb 6th at 2130pm',
    reminder: true,
  },
  {
    id:3,
    text: 'Food shooping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
  }
]);

//Add task
const addTask = (task) =>{
  const id = Math.floor(Math.random()* 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks,newTask])
}

// delete task function

const deleteTask = (id) => {
  console.log("What is happening")
  setTasks(tasks.filter((task) => task.id !== id));
}

//Toggle reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onShowForm ={() => setShowAddTask(!showAddTask)} showForm = {showAddTask}/>
      {showAddTask && <AddTask  addTask = {addTask} /> }
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} /> : "No tasks available"}
    </div>
  );
}

export default App;
