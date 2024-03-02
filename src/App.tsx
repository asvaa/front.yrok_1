import React from 'react';
import './App.css';
import { TasksType, Todolist } from './Todolist';

function App() {

    const todolistTitle_1 = "What to learn"
    const todolistTitle_2 = "What to boy"

    const tasks_1: TasksType[] = [
        { id: 1, title: "HTML & CSS", isDone: true },
        { id: 2, title: "JS & TS", isDone: true },
        { id: 3, title: "React & Redux", isDone: false },
    ]

    const tasks_2: TasksType[] = [
        // { id: 4, title: "Water", isDone: false },
        // { id: 5, title: "Milk", isDone: true },
        // { id: 6, title: "Hleb", isDone: true },
    ]

    return (
        <div className="App">
            <Todolist title={todolistTitle_1} tasks={tasks_1} />
            <Todolist title={todolistTitle_2} tasks={tasks_2} />
        </div>
    );
}

export default App;
