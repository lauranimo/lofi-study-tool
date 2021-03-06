import * as React from "react"
import Button from './Button'

const TaskHeader = ({onAdd, showAddTask}) => {
    return (
        <header className= 'header'> 
            <h1>To-Do</h1>
            <Button text={showAddTask ? 'CLOSE' : 'ADD'} 
            onClick= {onAdd}/>
        </header>
    )
}
/* TaskHeader.defaultProps = {
    title: 'Task Manager',
}

TaskHeader.propTypes = {
    title: PropTypes.string.isRequired,
}
 */

export default TaskHeader