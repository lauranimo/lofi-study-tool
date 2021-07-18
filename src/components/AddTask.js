import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [important, setImportant] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({text, time, important})

        setText('')
        setTime('')
        setImportant(false)
    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <h3>Tasks</h3>
                <input type="text" 
                placeholder='Add Task'
                value={text} 
                onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <h3>Time</h3>
                <input type="text" 
                placeholder='Add Time'
                value={time} 
                onChange={(e) => setTime(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <h3>Mark Important: </h3>
                <input 
                type="checkbox"
                checked={important}
                value={important} 
                onChange={(e) => setImportant(e.currentTarget.checked)} />
            </div>

            <input type="submit" value='Add Task' 
            className='btn btn-block'/>
        </form>
    )
}

export default AddTask
