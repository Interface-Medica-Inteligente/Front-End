// @flow
import * as React from 'react'
import { LightenDarkenColor } from '../../utils'
import './styles.css'

type Props = {
  color?: string,
  title: string,
  onClick?: () => void
}

const Button = (props: Props): React.Node => {
  const { color = '#00CEC8', title, onClick } = props
  const [hover, setHover] = React.useState(false)

  const toggleHover = () => setHover(!hover)

  return (
    <button style={{ backgroundColor: !hover ? color : LightenDarkenColor(color, 30) }} onMouseEnter={toggleHover} onMouseLeave={toggleHover} className='button' onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
