// @flow
import * as React from 'react'
import './styles.css'

type Props = {
  placeholder: string
}

const Input = (props: Props): React.Node => {
  const { placeholder } = props

  return (
    <div className='container-input'>
      <input className='input-text' placeholder={placeholder} />
    </div>
  )
}

export default Input
