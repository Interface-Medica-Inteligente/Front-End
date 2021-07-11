import * as React from 'react'
import './styles.css'

type Props = {
  placeholder?: string,
  label?: string,
  width?: number,
  height?: number,
  inputType?: string,
  options?: { value: any, title: string }[],
  value?: string,
  onChange?: (value: string) => void
}

const Input = React.forwardRef((props: Props, ref: any): React.Node => {
  const { inputType, options, label, width, height, ...rest } = props

  const [inputWidth, setInputWidth] = React.useState((window.innerWidth * 0.8 * 0.9 * width) - 80)

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setInputWidth((window.innerWidth * 0.8 * 0.9 * width) - 80)
    })
  }, [])

  if (inputType === 'select') {
    return <Select ref={ref} inputWidth={inputWidth} {...props} />
  }

  return (
    <div className='container-input'>
      {label && <p>{label}:</p>}
      <div className='input' style={{ width: inputWidth, height: (window.innerHeight * 0.1 * height)}}>
        <input ref={ref} style={{ width: inputWidth }} className='input-text' type={inputType} {...rest} />
      </div>
    </div>
  )
})

const Select = React.forwardRef((props: Props, ref: any) => {
  const { options, value, label, inputWidth, ...rest } = props

  return (
    <div className='container-input'>
      {label && <p>{label}:</p>}
      <div style={{ width: inputWidth }} className='input'>
        <select style={{ width: inputWidth }} ref={ref} className='input-text' required value={value} {...rest}>
          <option value='' disabled selected>Sexo</option>
          {options && options.map(option => (
            <option key={option.value} value={option.value}>{option.title}</option>
          ))}
        </select>
      </div>
    </div>
  )
})

export default Input
