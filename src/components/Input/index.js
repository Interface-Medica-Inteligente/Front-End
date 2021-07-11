import * as React from 'react'
import './styles.css'

type Props = {
  name?: string,
  data?: any[],
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
  const inputHeight = React.useMemo(() => (window.innerHeight * 0.1 * height), [])

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setInputWidth((window.innerWidth * 0.8 * 0.9 * width) - 80)
    })
  }, [])

  if (inputType === 'select') {
    return <Select ref={ref} inputWidth={inputWidth} {...props} />
  }

  if (inputType === 'radio') {
    return <Radio ref={ref} inputWidth={inputWidth} {...props} />
  }

  const InputComponent = (props) => !inputHeight ? <input ref={ref} {...props} /> : <textarea ref={ref} {...props} />

  return (
    <div className='container-input'>
      {label && <p>{label}:</p>}
      <div className='input' style={{ width: inputWidth, height: inputHeight }}>
        <InputComponent style={{ width: inputWidth, height: inputHeight - 20, marginTop: inputHeight ? 10 : 0 }} className='input-text' type={inputType} {...rest} />
      </div>
    </div>
  )
})

const Radio = React.forwardRef((props: Props, ref: any) => {
  const { name, data, ...rest } = props
  return (
    <div>
      {data.map((item, index) => (
        <label key={item.value}>
          <input defaultChecked={index === 0} className='input-radio' value={item.value} ref={ref} type='radio' name={name} {...rest} />   {item.label}
        </label>
      ))}
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
