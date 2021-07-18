import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.important ? 'important' : ''}`}
        onDoubleClick={() => onToggle(task.id)}
        role='button'
        tabIndex='0'>
            <h6>
                {task.text}
                <FaTimesCircle style ={{
                    color: 'rgba(117, 12, 0, 1)', cursor: 'pointer', fontSize: '15px'}}
                    onClick={() => onDelete(task.id)} />
            </h6>
            <p>{task.time}</p>
        </div>
    )
}

export default Task
