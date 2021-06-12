// @flow
import * as React from 'react'
import './styles.css'

type Props = {
  placeholder: string,
  inputType?: string
}

const Input = (props: Props): React.Node => {
  const { placeholder, inputType } = props
  if (inputType === 'select') {
    return (
      <div className='container-input'>
        <select className='input-text' placeholder={placeholder} type={inputType}>
          <option value='M'>
            Masculino
          </option>
          <option value='F'>
            Feminino
          </option>
        </select>
      </div>
    )
  }
  return (
    <div className='container-input'>
      <input className='input-text' placeholder={placeholder} type={inputType} />
    </div>
  )
}

export default Input
