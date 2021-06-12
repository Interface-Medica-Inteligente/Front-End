// @flow
import * as React from 'react'
import './styles.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Actions as DoctorActions } from '../../reducers/doctor'

const LoginScreen = (): React.Node => {
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(DoctorActions.entities.setDoctor({ token: 'hfsghdjhjsd' }))
  }

  return (
    <div className='container-login'>
      <div className='content'>
        <p className='login-text'>Login</p>
        <Input placeholder='E-mail' />
        <Input placeholder='Senha' />
        <Button title='Entrar' onClick={handleSubmit} />
      </div>
      <div className='container-button-register'>
        Não possui cadastro?<Link className='link-register' to='/register'>Cadastre-se</Link>
      </div>
    </div>
  )
}

export default LoginScreen
