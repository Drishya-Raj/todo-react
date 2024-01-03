import React from 'react';
import Button from './Button';


function TaskItem(props) {
    const {task, onComplete, onEdit, onDelete } = props;
    return (
        <li className={task?.completed ? 'completed' : ''}>
            <p>{task.text}</p>
            <span>
                <Button className='btn' onClick={onComplete} value="Complete"/>
                <Button className='btn' onClick={onEdit} value="Edit"/>
                <Button  className='btn' onClick={onDelete} value="Delete"/>
            </span>
        </li>
    );
}

export default TaskItem;
