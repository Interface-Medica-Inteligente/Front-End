// @flow
import * as React from 'react'
import './styles.css'

type Props = {
  title: string,
  onClick(): void
}

const Button = (props: Props): React.Node => {
  const { title, onClick } = props

  return (
    <button className='button' onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
