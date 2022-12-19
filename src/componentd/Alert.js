import React from 'react'

function Alert(props) {
    return (
        props.alert && <div class="alert alert-primary" role="alert">
            <strong className='text-center'>{props.alert}</strong>
        </div>
    )
}

export default Alert
