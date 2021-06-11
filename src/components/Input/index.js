// @flow
import * as React from 'react'
import './styles.css'

const Input = (): React.Node => {
    return(
        <div className='container-input'>
            <input className='input-text' placeholder='Text'/>
        </div>
    )
}

export default Input