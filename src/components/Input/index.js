import * as React from 'react'
import './styles.css'

type Props = {
  placeholder: string,
  inputType?: string,
  options?: { value: any, title: string }[],
  value?: string,
  onChange?: (value: string) => void
}

const Input = React.forwardRef((props: Props, ref: any): React.Node => {
  const { inputType, options, ...rest } = props
  if (inputType === 'select') {
    return <Select ref={ref} {...props} />
  }

  return (
    <div className='container-input'>
      <input ref={ref} className='input-text' type={inputType} {...rest} />
    </div>
  )
})

const Select = React.forwardRef((props: Props, ref: any) => {
  const { options, value, ...rest } = props

  return (
    <div className='container-input'>
      <select ref={ref} className='input-text' required value={value} {...rest}>
        <option value='' disabled selected>Sexo</option>
        {options && options.map(option => (
          <option key={option.value} value={option.value}>{option.title}</option>
        ))}
      </select>
    </div>
  )
})

export default Input
