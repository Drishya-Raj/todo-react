import React, { useState } from 'react';
import Button from './Button';
import TaskItem from './taskitem';
import Navbar from './navbar';

function Todos() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [edit, setEdit] = useState(false);
    const [save, setSave] = useState();

    
    const addTask = () => {
        if (task !== '') {
            const newTask = {
                text: task,
                completed: false
            };
            const updatedTaskList = [...taskList, newTask];
            setTaskList([...taskList, newTask]);
            setTask('');
            localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
        } else {
            alert("Enter something");
        }
        

    }

    const deleteTask = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
        localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
    }
    const completeTask = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList[index].completed = !updatedTaskList[index].completed;
        setTaskList(updatedTaskList);
    }


    const completedTasks = taskList.filter(task => task.completed);
    console.log("completed===", completedTasks);
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));



    const pendingTasks = taskList.filter(task => !task.completed);
    console.log("pending Tasks==>", pendingTasks);
    localStorage.setItem('pendingTasks', JSON.stringify(pendingTasks));

    const editTask = (index, newText) => {
        setEdit(true);
        setSave(index);
        setTask(newText);
    }

    const saveTask = () => {
        if (task !== '') {
            const updatedTaskList = [...taskList];
            updatedTaskList[save].text = task;
            setTaskList(updatedTaskList);
            setTask('');
            setEdit(false);
            setSave();
            localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
        } else {
            alert("Enter something");
        }
    }
    return (
        <div className='todopage'>
            <Navbar />
            <h1>Add your tasks</h1>
            <div className='enter'>
                <input type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter your task' />
                {edit ? (
                    <Button onClick={saveTask} value="SAVE"/>
                ) : (
                    <Button onClick={addTask} value="ADD" />
                )}
            </div>
            <div className='tasklists'>
                <ul>
                    {taskList.map((task, index) => (
                        <TaskItem
                            key={index} task={task} onComplete={() => completeTask(index)} onEdit={() => editTask(index, task.text)}
                            onDelete={() => deleteTask(index)}
                        />
                    ))}
                </ul>
            </div>
            {/* <Status taskList={taskList} /> */}
        </div>
    );
}
export default Todos;
