import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Status() {
    
    const storedTaskList = JSON.parse(localStorage.getItem('taskList'));
    console.log("storedTaskList==>", storedTaskList)
    const [displayType, setDisplayType] = useState("none");

    const handleDisplay = (type) => {
        setDisplayType(type);
    }
        const completedTasks = JSON.parse(localStorage.getItem('completedTasks'));
        console.log("completedTasks==>", completedTasks)
        const pendingTasks = JSON.parse(localStorage.getItem('pendingTasks'));
        console.log("pendingTasks==>", pendingTasks)

       
        return (
            <>
            <Link to="/todos"><h5>MY TASK LIST</h5></Link>
            
            <div className='statuspage'>
                
                <div className='flex'>
                    <button onClick={() => handleDisplay("all")}>All Tasks</button>
                    <button onClick={() => handleDisplay("completed")}>Completed Tasks</button>
                    <button onClick={() => handleDisplay("pending")}>Pending Tasks</button>
                </div>
                {(displayType === "completed") ? (
                    <div>
                        <h2>COMPLETED TASKS</h2>
                        <ul className='stat'>
                            {completedTasks.map((task, index) => (
                                <div className="cls">
                                    <li key={index}>{task.text}</li>
                                 </div>
                                
                            ))}
                        </ul>
                    </div>
                ) : null}

                {(displayType === "pending") ? (
                    <div>
                        <h2>PENDING TASKS</h2>
                        <ul className='stat'>
                            {pendingTasks.map((task, index) => (
                                <li key={index}>{task.text}</li>
                            ))}
                        </ul>
                    </div>
                ) : null}

                {(displayType === "all") ? (
                    <div>
                        <h2>ALL TASKS</h2>
                        <ul className='stat'>
                            {storedTaskList.map((task, index) => (
                                <li key={index}>{task.text}</li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>
            </>
        );
    }

export default Status;
