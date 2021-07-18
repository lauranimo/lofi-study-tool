import * as React from "react"
import PropTypes from 'prop-types'
import { btn } from "./index.css" 

const Button = ({ color, text, onClick }) => {
    return (
    <button onClick={onClick} 
    style= {{ backgroundColor: 'rgba(117, 12, 0, 1)'}} 
    className='btn'>
        {text}
    </button>
    )
}

Button.defaultProps = {
    color: 'rgba(117, 12, 0, 1)',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button