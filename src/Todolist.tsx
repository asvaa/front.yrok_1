import React from 'react';
import { Button } from './Button';
import { TodoListHeader } from './TodoListHeader';

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>

}

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}


export const Todolist = ({ title, tasks }: TodolistPropsType) => {

    let tasksList;
    if (tasks.length === 0) {
        tasksList = <span>spisok pust</span>
    } else {
        tasksList =
            <ul>
                {
                    tasks.map((tasks: TasksType) => {
                        return (
                            <li key={tasks.id}>
                                <input type="checkbox" checked={tasks.isDone} />
                                <span>{tasks.title}</span>
                            </li>

                        )
                    })

                }
            </ul>
    }
    return (
        <div className='todolist'>
            <TodoListHeader title={title} />
            <div>
                <input />
                <Button title='+' />
            </div>
            {tasksList}
            <div>
                <Button title='All' />
                <Button title='Active' />
                <Button title='Completed' />
            </div>
        </div>
    );
};
