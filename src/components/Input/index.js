// @flow
import * as React from 'react'
import './styles.css'

type Props = {
  placeholder: string,
  inputType?: string,
  options?: { value: any, title: string }[],
  value?: string,
  onChange?: (value: string) => void
}

const Input = (props: Props): React.Node => {
  const { inputType, options, ...rest } = props
  if (inputType === 'select') {
    return <Select {...props} />
  }

  return (
    <div className='container-input'>
      <input className='input-text' type={inputType} {...rest} />
    </div>
  )
}

const Select = (props: Props) => {
  const { options, value, ...rest } = props

  return (
    <div className='container-input'>
      <select className='input-text' required value={value} {...rest}>
        <option value='' disabled selected>Sexo</option>
        {options && options.map(option => (
          <option key={option.value} value={option.value}>{option.title}</option>
        ))}
      </select>
    </div>
  )
}

export default Input
